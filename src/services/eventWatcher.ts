import { decodeEventLog } from "viem";
import { EventHandlerRegistry } from "../core/EventHandlerRegistry";
import { ManageFamAuthorityAbi } from "../abis/ManageFamAuthorityAbi";
import { config } from "../utils/config";
import { createWebSocketClient } from "./websocket";

export async function watchNetworkEvents(
  network: string,
  registry: EventHandlerRegistry
) {
  console.log(`Watching events for network: ${network}`);

  const client = await createWebSocketClient(network);

  try {
    const hypersubSetEvent = ManageFamAuthorityAbi.find(
      (item) => item.type === "event" && item.name === "HypersubSet"
    );

    if (!hypersubSetEvent) {
      throw new Error("HypersubSet event not found in ABI");
    }

    const unwatch = client.watchEvent({
      address: config.contracts.manageFamAuthority,
      event: hypersubSetEvent,
      onLogs: async (logs) => {
        for (const log of logs) {
          try {
            const decodedLog = decodeEventLog({
              abi: ManageFamAuthorityAbi,
              data: log.data,
              topics: log.topics,
            });

            if (decodedLog.eventName === "HypersubSet") {
              await registry.handleEvent(decodedLog.eventName, {
                network,
                args: decodedLog.args || {},
                log: {
                  address: log.address,
                  blockHash: log.blockHash,
                  blockNumber: log.blockNumber,
                  logIndex: log.logIndex,
                  transactionHash: log.transactionHash,
                  transactionIndex: log.transactionIndex,
                  id: `${log.transactionHash}-${log.logIndex}`,
                },
              });
            }
          } catch (error) {
            console.warn(`Failed to decode log: ${error}`);
            continue;
          }
        }
      },
    });

    return () => {
      console.log(`Stopping event watch for network: ${network}`);
      unwatch();
    };
  } catch (error) {
    console.error(`Error watching network ${network}:`, error);
    throw error;
  }
}

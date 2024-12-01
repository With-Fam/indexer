import {
  createPublicClient,
  webSocket,
  decodeEventLog,
  PublicClient,
} from "viem";
import { EventHandlerRegistry } from "./core/EventHandlerRegistry";
import { handleHypersubSet } from "./handlers/PartyCardHandler";
import { config } from "./utils/config";
import { ManageFamAuthorityAbi } from "../lib/abi/ManageFamAuthorityAbi";

async function createWebSocketClient(network: string): Promise<PublicClient> {
  const wsUrl = config.networks[network].ws;
  console.log(`Connecting to WebSocket endpoint: ${wsUrl}`);

  return createPublicClient({
    transport: webSocket(wsUrl),
  });
}

async function watchNetworkEvents(
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

    // Keep the connection open
    return () => {
      console.log(`Stopping event watch for network: ${network}`);
      unwatch();
    };
  } catch (error) {
    console.error(`Error watching network ${network}:`, error);
    throw error;
  }
}

async function main() {
  const registry = new EventHandlerRegistry();
  registry.register("HypersubSet", handleHypersubSet);

  try {
    console.log(
      "Starting indexer with registered events:",
      registry.getRegisteredEvents()
    );

    const unwatchFns = await Promise.all(
      Object.keys(config.networks).map((network) =>
        watchNetworkEvents(network, registry)
      )
    );

    // Handle cleanup on process exit
    process.on("SIGINT", () => {
      console.log("Cleaning up WebSocket connections...");
      unwatchFns.forEach((unwatch) => unwatch());
      process.exit(0);
    });

    console.log("Watching for new events. Press Ctrl+C to exit.");
  } catch (error) {
    console.error("Error in indexer:", error);
  }
}

main().catch(console.error);

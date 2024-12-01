import { createPublicClient, http, Log, decodeEventLog } from "viem";
import { RPC_URLS } from "./rpc";
import { MANAGE_FAM_AUTHORITY_ADDRESS } from "./const";
import { ManageFamAuthorityAbi } from "./abi/ManageFamAuthorityAbi";
import { EventHandlerRegistry } from "./core/EventHandlerRegistry";

async function indexEventsForNetwork(
  network: string,
  registry: EventHandlerRegistry
) {
  console.log(`Indexing events for network: ${network}`);

  const client = createPublicClient({
    transport: http(RPC_URLS[network].http[0]),
  });

  try {
    const logs = await client.getLogs({
      address: MANAGE_FAM_AUTHORITY_ADDRESS,
      events: ManageFamAuthorityAbi,
      fromBlock: BigInt(0),
      toBlock: "latest",
    });

    console.log(`Found ${logs.length} logs for ${network}`);

    for (const log of logs) {
      try {
        const decodedLog = decodeEventLog({
          abi: ManageFamAuthorityAbi,
          data: log.data,
          topics: log.topics,
        });

        if (!decodedLog.eventName) continue;

        if (registry.hasHandler(decodedLog.eventName)) {
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

    console.log(`Completed indexing for network: ${network}`);
  } catch (error) {
    console.error(`Error indexing network ${network}:`, error);
    throw error;
  }
}

export default indexEventsForNetwork;

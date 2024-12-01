import { createPublicClient, http } from "viem";
import { RPC_URLS } from "./rpc.js";
import { MANAGE_FAM_AUTHORITY_ADDRESS } from "./const.js";
import { ManageFamAuthorityAbi } from "./abi/ManageFamAuthorityAbi.js";

async function indexEventsForNetwork(network, registry) {
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
      const eventSignature = log.eventName;

      if (registry.hasHandler(eventSignature)) {
        await registry.handleEvent(eventSignature, {
          network,
          args: log.args,
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
    }

    console.log(`Completed indexing for network: ${network}`);
  } catch (error) {
    console.error(`Error indexing network ${network}:`, error);
    throw error;
  }
}

export default indexEventsForNetwork;

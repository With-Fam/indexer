import getBlockNumber from "./getBlockNumber.js";
import getFromBlock from "./getFromBlock.js";
import { subscribeToEvents } from "./websocketClient.js";

async function indexEventsForNetwork(network) {
  console.log(`Starting indexer for ${network}...`);
  while (true) {
    try {
      const startBlock = await getFromBlock(network);
      console.log(`${network} - Starting from latest block ${startBlock}`);

      const eventName = "HypersubSet";
      await subscribeToEvents(network, eventName, async (logs) => {
        try {
          for (const log of logs) {
            console.log(
              `${network} - Processed new HypersubSet event in block ${log.blockNumber}`,
              `Party: ${log.args.party}`,
              `Hypersub: ${log.args.hypersub}`
            );
          }
        } catch (error) {
          console.error(
            `${network} - Error processing real-time event:`,
            error
          );
        }
      });

      console.log(`${network} - Watcher set up. Listening for new events...`);
      break;
    } catch (error) {
      console.error(`${network} - Error in indexEvents:`, error);
      console.log(`${network} - Retrying in 1 minute...`);
      await new Promise((resolve) => setTimeout(resolve, 60000));
    }
  }
}

export default indexEventsForNetwork;

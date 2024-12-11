import { type PublicClient } from "viem";
import { HypersubAbi } from "../abis/HypersubAbi";
import { processTransferEvent } from "./processTransferEvent";

// Find Transfer event in ABI
const transferEvent = HypersubAbi.find(
  (item) => item.type === "event" && item.name === "Transfer"
);

if (!transferEvent) {
  throw new Error("Transfer event not found in ABI");
}

export const pollTransferEvents = async (
  client: PublicClient,
  pollInterval = 2000
) => {
  let latestProcessedBlock = await client.getBlockNumber();
  console.log(
    `Starting to poll from block ${latestProcessedBlock} on ${client.chain?.name}`
  );

  const intervalId = setInterval(async () => {
    try {
      const currentBlock = await client.getBlockNumber();

      if (currentBlock > latestProcessedBlock) {
        console.log(
          `Checking blocks ${latestProcessedBlock} to ${currentBlock} on ${client.chain?.name}`
        );

        const logs = await client.getLogs({
          address: undefined,
          events: [transferEvent],
          fromBlock: latestProcessedBlock + 1n,
          toBlock: currentBlock,
        });

        for (const log of logs) {
          await processTransferEvent(log, client?.chain?.id);
        }

        latestProcessedBlock = currentBlock;
      }
    } catch (error) {
      console.error(`Error polling events on ${client.chain?.name}:`, error);
    }
  }, pollInterval);

  return () => {
    clearInterval(intervalId);
    console.log(`Stopped polling on ${client.chain?.name}`);
  };
};

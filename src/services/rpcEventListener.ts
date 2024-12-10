import { createPublicClient, http, decodeEventLog, type Log } from "viem";
import { base, baseSepolia } from "viem/chains";
import { HypersubAbi } from "../abis/HypersubAbi";

// Configure clients for each network
const baseClient = createPublicClient({
  chain: base,
  transport: http(),
  batch: {
    multicall: true,
  },
});

const baseSepoliaClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
  batch: {
    multicall: true,
  },
});

// Find Transfer event in ABI
const transferEvent = HypersubAbi.find(
  (item) => item.type === "event" && item.name === "Transfer"
);

if (!transferEvent) {
  throw new Error("Transfer event not found in ABI");
}

// Function to process Transfer events
const processTransferEvent = async (log: Log) => {
  try {
    // Check if this is an NFT transfer (should have 4 topics: event signature + 3 indexed params)
    if (log.topics.length !== 4) {
      return; // Skip non-NFT transfers
    }

    const { args } = decodeEventLog({
      abi: HypersubAbi,
      data: log.data,
      topics: log.topics,
    });

    // Type guard to ensure we have the NFT transfer event args
    if (!("tokenId" in args)) {
      return; // Skip if not an NFT transfer
    }

    console.log("Transfer Event Processed:", {
      from: args.from,
      to: args.to,
      tokenId: args.tokenId,
      blockNumber: log.blockNumber,
      transactionHash: log.transactionHash,
      address: log.address, // Contract address that emitted the event
    });

    // TODO: Add your event processing logic here
    // e.g., save to database, trigger notifications, etc.
  } catch (error) {
    console.error("Error processing transfer event:", error);
    console.debug("Raw log data:", {
      topics: log.topics,
      data: log.data,
      address: log.address,
    });
  }
};

// Function to poll for Transfer events on a specific network
const pollTransferEvents = async (
  client: typeof baseClient,
  pollInterval = 2000
) => {
  let latestProcessedBlock = await client.getBlockNumber();
  console.log(
    `Starting to poll from block ${latestProcessedBlock} on ${client.chain.name}`
  );

  const intervalId = setInterval(async () => {
    try {
      const currentBlock = await client.getBlockNumber();

      if (currentBlock > latestProcessedBlock) {
        console.log(
          `Checking blocks ${latestProcessedBlock} to ${currentBlock} on ${client.chain.name}`
        );

        const logs = await client.getLogs({
          address: undefined, // This allows us to watch all contracts
          events: [transferEvent],
          fromBlock: latestProcessedBlock + 1n,
          toBlock: currentBlock,
        });

        for (const log of logs) {
          await processTransferEvent(log);
        }

        latestProcessedBlock = currentBlock;
      }
    } catch (error) {
      console.error(`Error polling events on ${client.chain.name}:`, error);
    }
  }, pollInterval);

  // Return cleanup function
  return () => {
    clearInterval(intervalId);
    console.log(`Stopped polling on ${client.chain.name}`);
  };
};

// Start polling events on both networks
const startEventListeners = async () => {
  try {
    console.log("Starting Transfer event listeners...");

    // Start pollers for both networks
    const cleanupFns = [
      await pollTransferEvents(baseClient),
      await pollTransferEvents(baseSepoliaClient),
    ];

    console.log("Transfer event listeners started successfully");

    return () => {
      console.log("Stopping Transfer event listeners...");
      cleanupFns.forEach((cleanup) => cleanup());
    };
  } catch (error) {
    console.error("Error starting event listeners:", error);
    throw error;
  }
};

export { startEventListeners, processTransferEvent };

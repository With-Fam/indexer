import { decodeEventLog, type Log } from "viem";
import { HypersubAbi } from "../abis/HypersubAbi";

export const processTransferEvent = async (log: Log) => {
  try {
    // Check if this is an NFT transfer (should have 4 topics: event signature + 3 indexed params)
    if (log.topics.length !== 4) {
      return; // Skip non-NFT transfers
    }

    const { args } = decodeEventLog({
      abi: HypersubAbi,
      data: log.data,
      topics: log.topics,
      eventName: "Transfer",
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
      address: log.address,
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

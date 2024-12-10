import { decodeEventLog, type Log } from "viem";
import { HypersubAbi } from "../abis/HypersubAbi";
import { getPartiesForHypersubSet } from "../libs/stack/getPartiesForHypersubSet";

export const processTransferEvent = async (log: Log) => {
  try {
    if (log.topics.length !== 4) {
      return; // Skip non-ERC721 transfers
    }

    const { args } = decodeEventLog({
      abi: HypersubAbi,
      data: log.data,
      topics: log.topics,
      eventName: "Transfer",
    });

    // Type guard to ensure we have the NFT transfer event args
    if (!("tokenId" in args)) {
      return; // Skip if not a token transfer
    }

    // Get associated parties for this hypersub
    const parties = await getPartiesForHypersubSet(log.address);

    // Skip if this hypersub has no associated parties
    if (parties.length === 0) {
      return;
    }

    console.log("Processing Hypersub Transfer Event:", {
      from: args.from,
      to: args.to,
      tokenId: args.tokenId,
      blockNumber: log.blockNumber,
      transactionHash: log.transactionHash,
      address: log.address,
      associatedParties: parties.map((p) => p.party),
    });

    // TODO: Call addPartyCards for each associated party (will be implemented in step 5)
  } catch (error) {
    console.error("Error processing transfer event:", error);
    console.debug("Raw log data:", {
      topics: log.topics,
      data: log.data,
      address: log.address,
    });
  }
};

import { decodeEventLog, type Log } from "viem";
import { HypersubAbi } from "../abis/HypersubAbi";
import { getPartiesForHypersubSet } from "../libs/stack/getPartiesForHypersubSet";
import { addPartyCardsForSubscriber } from "./manageFamAuthority/addPartyCardsForSubscriber";

export const processTransferEvent = async (log: Log) => {
  try {
    if (log.topics.length !== 4) {
      return; // Skip non-Hypersub NFT transfers
    }

    const { args } = decodeEventLog({
      abi: HypersubAbi,
      data: log.data,
      topics: log.topics,
      eventName: "Transfer",
    });

    // Type guard to ensure we have the Hypersub NFT transfer event args
    if (!("tokenId" in args)) {
      return; // Skip if not a Hypersub NFT transfer
    }

    const parties = await getPartiesForHypersubSet(log.address);
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

    await addPartyCardsForSubscriber(parties, args.to);
  } catch (error) {
    console.error("Error processing transfer event:", error);
    console.debug("Raw log data:", {
      topics: log.topics,
      data: log.data,
      address: log.address,
    });
  }
};

import { decodeEventLog, type Log } from "viem";
import { HypersubAbi } from "../abis/HypersubAbi";
import { getPartiesForHypersubSet } from "../libs/stack/getPartiesForHypersubSet";
import { addPartyCards } from "./manageFamAuthority/addPartyCards";

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

    // Type guard to ensure we have the NFT transfer event args
    if (!("tokenId" in args)) {
      return; // Skip if not a Hypersub NFT transfer
    }

    // Get associated parties for this hypersub
    const parties = await getPartiesForHypersubSet(log.address);

    // Skip if this hypersub has no associated parties
    if (parties.length === 0) {
      return;
    }
    console.log("parties", parties);

    console.log("Processing Hypersub Transfer Event:", {
      from: args.from,
      to: args.to,
      tokenId: args.tokenId,
      blockNumber: log.blockNumber,
      transactionHash: log.transactionHash,
      address: log.address,
      associatedParties: parties.map((p) => p.party),
    });

    // Add party cards for each associated party
    for (const { party } of parties) {
      try {
        const txHash = await addPartyCards(party, args.to);
        console.log(
          `Successfully added party card for party ${party}, transaction: ${txHash}`
        );
      } catch (error) {
        console.error(`Failed to add party card for party ${party}:`, error);
        // Continue processing other parties even if one fails
      }
    }
  } catch (error) {
    console.error("Error processing transfer event:", error);
    console.debug("Raw log data:", {
      topics: log.topics,
      data: log.data,
      address: log.address,
    });
  }
};

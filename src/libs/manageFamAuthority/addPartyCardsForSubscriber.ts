import { Address } from "viem";
import { HypersubSetEvent } from "../stack/getPartiesForHypersubSet";
import { addPartyCards } from "./addPartyCards";

export const addPartyCardsForSubscriber = async (
  parties: HypersubSetEvent[],
  subscriber: Address
): Promise<void> => {
  for (const { party } of parties) {
    try {
      const txHash = await addPartyCards(party, subscriber);
      console.log(
        `Successfully added party card for party ${party}, transaction: ${txHash}`
      );
    } catch (error) {
      console.error(`Failed to add party card for party ${party}:`, error);
      // Continue processing other parties even if one fails
    }
  }
};

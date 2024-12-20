import { Address, getAddress } from "viem";
import { stack } from "./client";

export interface HypersubSetEvent {
  party: Address;
  hypersub: Address;
  blockNumber: string;
  transactionHash: string;
}

export async function getPartiesForHypersubSet(
  hypersubAddress: string
): Promise<HypersubSetEvent[]> {
  try {
    const response = await stack.getEvents({
      query: stack
        .eventsQuery()
        .where({
          associatedAccount: getAddress(hypersubAddress.toLowerCase()),
        })
        .offset(0)
        .build(),
    });
    if (!response || !response.length) {
      return [];
    }

    return response.map((event) => ({
      party: event.metadata.party as Address,
      hypersub: event.address as Address,
      blockNumber: event.metadata.blockNumber as string,
      transactionHash: event.metadata.transactionHash as string,
    }));
  } catch (error) {
    console.error("Error fetching HypersubSet events:", error);
    return [];
  }
}

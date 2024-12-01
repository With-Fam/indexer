import { BaseEvent } from "../types.js";
import trackEventsWithStack from "../stack/trackEventsWithStack.js";

export async function handlePartyCardAdded(event: BaseEvent): Promise<void> {
  await trackEventsWithStack(event.network, [
    {
      type: "PartyCardAdded",
      party: event.args.party,
      partyMember: event.args.partyMember,
      newIntrinsicVotingPower: event.args.newIntrinsicVotingPower,
      timestamp: new Date().toISOString(),
    },
  ]);
}

export async function handleHypersubSet(event: BaseEvent): Promise<void> {
  await trackEventsWithStack(event.network, [
    {
      type: "HypersubSet",
      party: event.args.party,
      hypersub: event.args.hypersub,
      timestamp: new Date().toISOString(),
    },
  ]);
}

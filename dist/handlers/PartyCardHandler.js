import { trackEvents } from "../utils/trackEvents";
export async function handlePartyCardAdded(event) {
    await trackEvents(event.network, [
        {
            type: "PartyCardAdded",
            party: event.args.party,
            partyMember: event.args.partyMember,
            newIntrinsicVotingPower: event.args.newIntrinsicVotingPower,
            timestamp: new Date().toISOString(),
        },
    ]);
}
export async function handleHypersubSet(event) {
    await trackEvents(event.network, [
        {
            type: "HypersubSet",
            party: event.args.party,
            hypersub: event.args.hypersub,
            timestamp: new Date().toISOString(),
        },
    ]);
}

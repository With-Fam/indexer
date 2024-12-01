import type { BaseEvent } from "../types/events";
import { trackEvents } from "../utils/trackEvents";

export async function handleHypersubSet(event: BaseEvent): Promise<void> {
  await trackEvents(event.network, [
    {
      type: "HypersubSet",
      party: event.args.party,
      hypersub: event.args.hypersub,
      timestamp: new Date().toISOString(),
    },
  ]);
}

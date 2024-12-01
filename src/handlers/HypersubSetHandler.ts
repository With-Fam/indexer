import type { BaseEvent } from "../types/events";
import { trackEvents } from "../utils/trackEvents";
import { config } from "../utils/config";

export async function handleHypersubSet(event: BaseEvent): Promise<void> {
  await trackEvents(event.network, [
    {
      name: "HypersubSet",
      account: event.args.party,
      uniqueId: event.log.id,
      pointSystemId: config.stackPointSystemId,
      points: 1,
      metadata: {
        hypersub: event.args.hypersub,
        party: event.args.party,
        network: event.network,
        timestamp: new Date().toISOString(),
      },
    },
  ]);
}

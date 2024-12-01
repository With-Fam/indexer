import { EventHandlerRegistry } from "./lib/core/EventHandlerRegistry.js";
import {
  handlePartyCardAdded,
  handleHypersubSet,
} from "./lib/handlers/PartyCardHandler.js";
import indexEventsForNetwork from "./lib/indexEventsForNetwork.js";
import { NETWORKS } from "./lib/rpc.js";

// Initialize the event handler registry
const registry = new EventHandlerRegistry();

// Register event handlers
registry.register("PartyCardAdded", handlePartyCardAdded);
registry.register("HypersubSet", handleHypersubSet);

async function indexAllNetworks() {
  try {
    console.log(
      "Starting indexer with registered events:",
      registry.getRegisteredEvents()
    );

    // Pass the registry to the network indexer
    await Promise.all(
      Object.values(NETWORKS).map((network) =>
        indexEventsForNetwork(network, registry)
      )
    );
  } catch (error) {
    console.error("Error in indexer:", error);
  }
}

indexAllNetworks().catch(console.error);

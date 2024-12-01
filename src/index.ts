import { EventHandlerRegistry } from "./core/EventHandlerRegistry";
import { handleHypersubSet } from "./handlers/HypersubSetHandler";
import { config } from "./utils/config";
import { watchNetworkEvents } from "./services/eventWatcher";

async function main() {
  const registry = new EventHandlerRegistry();
  registry.register("HypersubSet", handleHypersubSet);

  try {
    console.log(
      "Starting indexer with registered events:",
      registry.getRegisteredEvents()
    );

    const unwatchFns = await Promise.all(
      Object.keys(config.networks).map((network) =>
        watchNetworkEvents(network, registry)
      )
    );

    // Handle cleanup on process exit
    process.on("SIGINT", () => {
      console.log("Cleaning up WebSocket connections...");
      unwatchFns.forEach((unwatch) => unwatch());
      process.exit(0);
    });

    console.log("Watching for new events. Press Ctrl+C to exit.");
  } catch (error) {
    console.error("Error in indexer:", error);
  }
}

main().catch(console.error);

import { EventHandlerRegistry } from "./core/EventHandlerRegistry";
import { handleHypersubSet } from "./handlers/HypersubSetHandler";
import { config } from "./utils/config";
import { watchNetworkEvents } from "./services/eventWatcher";
import { startEventListeners } from "./services/rpcEventListener";

async function main() {
  const registry = new EventHandlerRegistry();
  registry.register("HypersubSet", handleHypersubSet);

  try {
    console.log(
      "Starting indexer with registered events:",
      registry.getRegisteredEvents()
    );

    // Start both WebSocket and RPC event listeners
    const [unwatchWebSocket, unwatchTransfer] = await Promise.all([
      Promise.all(
        Object.keys(config.networks).map((network) =>
          watchNetworkEvents(network, registry)
        )
      ),
      startEventListeners(),
    ]);

    // Cleanup function for both WebSocket and RPC connections
    const cleanup = () => {
      console.log("Cleaning up connections...");
      unwatchWebSocket.forEach((unwatch) => unwatch());
      unwatchTransfer();
      process.exit(0);
    };

    // Handle graceful shutdown
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);

    console.log("Watching for new events. Press Ctrl+C to exit.");
  } catch (error) {
    console.error("Error in indexer:", error);
  }
}

main().catch(console.error);

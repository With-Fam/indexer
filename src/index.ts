import { EventHandlerRegistry } from "./core/EventHandlerRegistry";
import { handleHypersubSet } from "./handlers/HypersubSetHandler";
import { config } from "./utils/config";
import { watchNetworkEvents } from "./services/eventWatcher";
import { startEventListeners } from "./services/rpcEventListener";
import { SubscriptionPollingService } from "./services/subscriptionPollingService";

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

    // Initialize and start subscription polling service
    const subscriptionPollingService = new SubscriptionPollingService();
    subscriptionPollingService.start();

    // Cleanup function for all services
    const cleanup = () => {
      console.log("Cleaning up connections...");
      unwatchWebSocket.forEach((unwatch) => unwatch());
      unwatchTransfer();
      subscriptionPollingService.stop();
      process.exit(0);
    };

    // Handle graceful shutdown
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);

    console.log("Watching for new events. Press Ctrl+C to exit.");
  } catch (error) {
    console.error("Error in indexer:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

import { checkSubscriptions } from "../libs/hypersub/checkSubscriptions";

const POLLING_INTERVAL = 1000 * 60 * 1; // 1 minute

export class SubscriptionPollingService {
  private intervalId: NodeJS.Timeout | null = null;

  start() {
    if (this.intervalId) {
      console.warn("Subscription polling service is already running");
      return;
    }

    console.log("Starting subscription polling service...");

    // Run immediately on start
    this.pollSubscriptions();

    // Then set up interval
    this.intervalId = setInterval(() => {
      this.pollSubscriptions();
    }, POLLING_INTERVAL);
  }

  stop() {
    if (!this.intervalId) {
      console.warn("Subscription polling service is not running");
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;
    console.log("Subscription polling service stopped");
  }

  private async pollSubscriptions() {
    try {
      console.log("Checking for expired subscriptions...");
      await checkSubscriptions();
      console.log("Finished checking subscriptions");
    } catch (error) {
      console.error("Error checking subscriptions:", error);
    }
  }
}

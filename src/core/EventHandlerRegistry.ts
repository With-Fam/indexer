import { BaseEvent } from "../types/events";

export class EventHandlerRegistry {
  private handlers: Map<string, (event: BaseEvent) => Promise<void>> =
    new Map();

  register(
    eventSignature: string,
    handler: (event: BaseEvent) => Promise<void>
  ) {
    this.handlers.set(eventSignature, handler);
    console.log(`Registered handler for event: ${eventSignature}`);
  }

  async handleEvent(eventSignature: string, event: BaseEvent): Promise<void> {
    const handler = this.handlers.get(eventSignature);
    if (handler) {
      try {
        await handler(event);
        console.log(`Successfully handled event: ${eventSignature}`);
      } catch (error) {
        console.error(`Error handling event ${eventSignature}:`, error);
        throw error;
      }
    } else {
      console.warn(`No handler registered for event: ${eventSignature}`);
    }
  }

  hasHandler(eventSignature: string): boolean {
    return this.handlers.has(eventSignature);
  }

  getRegisteredEvents(): string[] {
    return Array.from(this.handlers.keys());
  }
}

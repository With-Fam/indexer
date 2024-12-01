export class EventHandlerRegistry {
    constructor() {
        this.handlers = new Map();
    }
    register(eventSignature, handler) {
        this.handlers.set(eventSignature, handler);
        console.log(`Registered handler for event: ${eventSignature}`);
    }
    async handleEvent(eventSignature, event) {
        const handler = this.handlers.get(eventSignature);
        if (handler) {
            try {
                await handler(event);
                console.log(`Successfully handled event: ${eventSignature}`);
            }
            catch (error) {
                console.error(`Error handling event ${eventSignature}:`, error);
                throw error;
            }
        }
        else {
            console.warn(`No handler registered for event: ${eventSignature}`);
        }
    }
    hasHandler(eventSignature) {
        return this.handlers.has(eventSignature);
    }
    getRegisteredEvents() {
        return Array.from(this.handlers.keys());
    }
}

import { crossTabChannel } from "./broadcast";

interface EventHandler {
  (payload: unknown): void;
}

interface Publish {
  (
    eventName: string,
    payload: unknown,
    options?: { broadcast?: boolean },
  ): void;
}

interface Subscribe {
  (eventName: string, handler: EventHandler): () => void;
}

interface EventBus {
  publish: Publish;
  subscribe: Subscribe;
}

const listeners = new Map<string, Set<EventHandler>>();

export const eventBus: EventBus = {
  subscribe(eventName, handler) {
    if (!listeners.has(eventName)) {
      listeners.set(eventName, new Set());
    }

    listeners.get(eventName)!.add(handler);

    return () => {
      listeners.get(eventName)?.delete(handler);
    };
  },

  publish(eventName, payload, { broadcast = true } = {}) {
    listeners.get(eventName)?.forEach((handler) => handler(payload));

    if (broadcast) {
      crossTabChannel.postMessage({ eventName, payload });
    }
  },
};

import { useEffect } from "react";
import { eventBus } from "../libs/eventBus";

export const useEvent = <T>(
  eventName: string,
  handler: (payload: T) => void,
) => {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe(
      eventName,
      handler as (payload: unknown) => void,
    );

    return unsubscribe;
  }, [eventName, handler]);
};

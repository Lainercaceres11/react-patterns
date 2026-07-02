import ButtonsNotifications from "../pattern/pub-sub-pattern/task/publisher/buttons-notifications";
import { SuscribeNotifications } from "../pattern/pub-sub-pattern/task/suscribers/suscribers-notifications";

export const PubSubPatternDemo = () => {
  return (
    <div className="space-y-4">
      <ButtonsNotifications />
      <SuscribeNotifications />
    </div>
  );
};

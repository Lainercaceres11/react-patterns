import { useEffect, useState } from "react";
import { useEvent } from "../../hooks/useEvent";

export const SuscribeNotifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  useEvent("notification", (data: string) => {
    setNotifications((notifications) => [...notifications, data]);
    console.log(data);
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  return (
    <div>
      <ul>
        {notifications.map((notification) => (
          <li key={notification}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

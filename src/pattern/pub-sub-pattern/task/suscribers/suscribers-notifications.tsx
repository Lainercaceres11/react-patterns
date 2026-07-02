import { useEffect, useState } from "react";
import { useEvent } from "../../hooks/useEvent";

export const SuscribeNotifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEvent("add:notification", (data: string) => {
    setNotifications((notifications) => [...notifications, data]);
  });

  useEffect(() => {
    const storedNotifications = localStorage.getItem("notifications");
    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "success":
        return "bg-green-100 border-green-500 text-green-800";
      case "error":
        return "bg-red-100 border-red-500 text-red-800";
      case "warning":
        return "bg-yellow-100 border-yellow-500 text-yellow-800";
      default:
        return "bg-gray-100 border-gray-500 text-gray-800";
    }
  };

  const handleRemoveNotification = (notifications: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification !== notifications),
    );
  };

  return (
    <div className="fixed top-4 right-4 space-y-4 max-w-md z-50 ">
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li
            className={`px-4 py-2 border rounded  ${getCategoryStyle(notification)}`}
            key={notification}
          >
            <p>This is a notification {notification}</p>
            <button
              aria-label="Remove notification"
              onClick={() => handleRemoveNotification(notification)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

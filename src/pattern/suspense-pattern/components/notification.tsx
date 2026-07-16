import { use } from "react";

export default function Notifications({
  promise,
}: {
  promise: Promise<string[]>;
}) {
  const notifications = use(promise);

  return (
    <div className="space-y-2 border border-gray-400 p-2">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

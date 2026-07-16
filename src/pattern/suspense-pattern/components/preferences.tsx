import { use } from "react";

export type Preference = {
  type: string;
  status: string;
  userId: number;
};

export default function Preferences({
  promise,
}: {
  promise: Promise<Preference[]>;
}) {
  const preferences = use(promise);

  return (
    <div className="space-y-2 border border-gray-400 p-2">
      <h1 className="text-2xl font-bold">Preferences</h1>
      <ul>
        {preferences.map((preference) => (
          <li key={preference.type}>{preference.type}</li>
        ))}
      </ul>
    </div>
  );
}

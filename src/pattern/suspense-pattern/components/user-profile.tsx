import { use } from "react";

export type UserProfileType = {
  id: number;
  name: string;
  role: string;
};

export default function UserProfile({
  promise,
}: {
  promise: Promise<UserProfileType>;
}) {
  const user = use(promise);

  return (
    <div className="space-y-2 border border-gray-400 p-2">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <h1>{user.name}</h1>
      <p>{user.role}</p>
    </div>
  );
}

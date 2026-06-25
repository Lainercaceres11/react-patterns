import type { UserData } from "../types/types";

export const ProfilePage = ({ user }: { user: UserData }) => {
  return (
    <div className="space-y-4 bg-blue-900 text-white rounded-md px-2 py-2">
      <h2 className="text-2xl font-bold">Profile page</h2>
      <p>{user.name}</p>
      <p>{user.surname}</p>
    </div>
  );
};

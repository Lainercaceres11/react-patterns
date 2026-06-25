import type { UserData } from "../types/types";

export const AdminPanel = ({ user }: { user: UserData }) => {
  if (!user?.permissions?.includes("Admin")) return <p>Access denied</p>;
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Panel</h1>
    </div>
  );
};

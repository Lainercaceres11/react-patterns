import type { UserData } from "../types/types";
export const ReportPage = ({ user }: { user: UserData }) => {
  if (!user?.permissions?.includes("Report")) return <p>Access denied</p>;
  return <div>ReportPage</div>;
};

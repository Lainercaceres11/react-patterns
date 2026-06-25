import { AdminPanel } from "../pattern/hoc-pattern/pages/admin-panel";
import { ProfilePage } from "../pattern/hoc-pattern/pages/profile-page";
import { ReportPage } from "../pattern/hoc-pattern/pages/report-page";
import withUserDataAndPermissions from "../pattern/hoc-pattern/withUserDataAndPermissions";

const AdminPanelWithHoc = withUserDataAndPermissions(AdminPanel);
const ProfilePageWithHoc = withUserDataAndPermissions(ProfilePage);
const ReportPageWithHoc = withUserDataAndPermissions(ReportPage);

export const HocDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <AdminPanelWithHoc />
      <ProfilePageWithHoc />
      <ReportPageWithHoc />
    </div>
  );
};

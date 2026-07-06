import useUsers from "../useUsers";

export default function useProfileFacade() {
  const user = useUsers();

  const profile = {
    name: user.name,
    email: user.email,
  };

  const isProfileComplete = user.status_percentaje === 100 ? true : false;
  const canEditProfile = user.permissions.includes("Admin") ?? false;

  return { canEditProfile, isProfileComplete, profile };
}

import type { User } from "../context";
import { useAuth } from "../hook/useAuth";

export const ProfileUser = ({ user }: { user: User }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated)
    return (
      <p className="text-slate-700 text-center text-2xl">
        Por favor inicia sesión
      </p>
    );

  return (
    <div className="flex flex-col items-center">
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

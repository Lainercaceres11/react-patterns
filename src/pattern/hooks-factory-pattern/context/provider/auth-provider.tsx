import { AuthContext } from "..";
import { createAuthHook, type AuthType } from "../../hook-factory";

export default function AuhtProviderHooks({
  children,
  strategy,
}: {
  children: React.ReactNode;
  strategy: AuthType;
}) {
  const useAuth = createAuthHook(strategy);
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

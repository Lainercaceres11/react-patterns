import { GetUserContext } from ".";
import { createUserHook } from "../hooks-factory-user";
import type { StrategyType } from "../types";

export default function GetUserProvider({
  strategy,
  children,
}: {
  strategy: StrategyType;
  children: React.ReactNode;
}) {
  const useUsers = createUserHook(strategy);
  const data = useUsers();

  return (
    <GetUserContext.Provider value={data}>{children}</GetUserContext.Provider>
  );
}

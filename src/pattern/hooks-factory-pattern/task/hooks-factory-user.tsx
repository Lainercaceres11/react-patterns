import { useFecthUser } from "./hooks/useFecthUser";
import { useGraphQLUsers } from "./hooks/useGraphQLUsers";
import { useInMemoryUsers } from "./hooks/useInMemoryUsers";

const getUserHookMap = {
  rest: useFecthUser,
  memory: useInMemoryUsers,
  graphql: useGraphQLUsers,
};

type GetUserHookType = keyof typeof getUserHookMap;

export const createUserHook = (type: GetUserHookType) => {
  return getUserHookMap[type];
};

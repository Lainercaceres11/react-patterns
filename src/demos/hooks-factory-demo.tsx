import Users from "../pattern/hooks-factory-pattern/task/components/users";

import GetUserProvider from "../pattern/hooks-factory-pattern/task/provider/get-users-provider";

export default function HookFactoryDemo() {
  return (
    <GetUserProvider strategy="rest">
      <Users />
    </GetUserProvider>
  );
}

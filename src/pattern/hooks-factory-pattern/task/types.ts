export type User = {
  id: number;
  name: string;
};

export type StrategyType = "rest" | "memory" | "graphql";
export type GetUserHookType = {
  users: User[];
  isLoading: boolean;
};

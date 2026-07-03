export const useGraphQLUsers = () => {
  return {
    users: [
      { id: 1, name: "GraphQL 1" },
      { id: 2, name: "GraphQL 2" },
      { id: 3, name: "GraphQL 3" },
    ],
    isLoading: false,
  };
};

export const useInMemoryUsers = () => {
  return {
    users: [
      { id: 1, name: "Memory 1" },
      { id: 2, name: "Memory 2" },
      { id: 3, name: "Memory 3" },
    ],
    isLoading: false,
  };
};

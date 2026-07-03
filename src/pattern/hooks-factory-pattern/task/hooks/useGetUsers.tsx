import { useContext } from "react";
import { GetUserContext } from "../provider";

export const useGetUsers = () => {
  const context = useContext(GetUserContext);
  if (!context)
    throw new Error("useGetUsers must be used within a GetUserProvider");
  return context;
};

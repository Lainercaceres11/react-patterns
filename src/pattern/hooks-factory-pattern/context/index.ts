import { createContext } from "react";

type AuthContextType = { login: () => void };

export const AuthContext = createContext<AuthContextType | null>(null);

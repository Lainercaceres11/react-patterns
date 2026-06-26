import { createContext } from "react";

export type User = {
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
};

export type Language = "es" | "en";

export type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
const LanguageContext = createContext<LanguageContextType | null>(null);

export { AuthContext, LanguageContext };

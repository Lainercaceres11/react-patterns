import { createContext } from "react";
import type { GetUserHookType } from "../types";

export const GetUserContext = createContext<GetUserHookType | null>(null);

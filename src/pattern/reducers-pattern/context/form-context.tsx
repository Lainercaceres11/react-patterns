import { createContext } from "react";

import type { ActionType, FormDataType } from "../types/types";

type FormContextType = {
  currentStep: number;
  formData: FormDataType;
  dispatch: React.Dispatch<ActionType>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormContext = createContext<FormContextType | null>(null);

export default FormContext;

import { createContext, useContext } from "react";

export type FormContextType = {
  values: Record<string, unknown>;
  handleChange: (name: string, value: string) => void;
  handleBlur: (name: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  errors: Record<string, string | null>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  resetForm: () => void;
  setFormValues: (newValues: Record<string, unknown>) => void;
  setFieldValue: (name: string, value: string) => void;
  setFieldError: (name: string, error: string) => void;
};
export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

import { useContext } from "react";
import FormContext from "../context/form-context";

export const useFormField = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormField must be used within a FormProvider");
  }
  return context;
};

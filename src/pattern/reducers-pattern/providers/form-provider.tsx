import { useReducer } from "react";
import FormContext from "../context/form-context";
import formReducer from "../reducers/form-reducer";
import type { FormDataType } from "../types/types";

const initialState = {
  currentStep: 1,
  steps: [],
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: false,
  } satisfies FormDataType,
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: name as keyof FormDataType,
        value: type === "checkbox" ? checked : value,
      },
    });
  };

  return (
    <FormContext.Provider
      value={{
        currentStep: state.currentStep,
        formData: state.formData,
        dispatch,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

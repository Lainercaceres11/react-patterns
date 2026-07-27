import useForm, { type FormErrors, type FormValues } from "../hooks/useForm";
import { FormContext } from "./form-context";

type FormProviderProps = {
  initialValues: FormValues;
  children:
    | React.ReactNode
    | ((formValues: ReturnType<typeof useForm>) => React.ReactNode);
  onSubmit: (values: FormValues) => void;
  validate: (values: FormValues) => FormErrors;
};

export default function Form({
  initialValues,
  onSubmit,
  validate,
  children,
}: FormProviderProps) {
  const formValues = useForm(initialValues, onSubmit, validate);
  return (
    <FormContext.Provider value={formValues}>
      <form
        onSubmit={formValues.handleSubmit}
        className="flex flex-col gap-2"
        noValidate
      >
        {typeof children === "function" ? children(formValues) : children}
      </form>
    </FormContext.Provider>
  );
}

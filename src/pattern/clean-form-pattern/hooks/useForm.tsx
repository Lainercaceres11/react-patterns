import { useCallback, useState } from "react";

export type FormValues = Record<string, unknown>;
export type FormErrors = Record<string, string | null>;
export type FormTouched = Record<string, boolean>;

export default function useForm(
  initialValues: FormValues,
  onSubmit: (values: FormValues) => void,
  validate: (values: FormValues) => FormErrors,
) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (name: string, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
    },
    [errors],
  );

  const handleBlur = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }));

      if (validate) {
        const fieldErrors = validate({ ...values });
        if (fieldErrors[name]) {
          setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
        }
      }
    },
    [validate, values],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault();

      // Validate all fields
      if (validate) {
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
          // Mark all fields as touched
          const allTouched = Object.keys(values).reduce<FormTouched>(
            (acc, key) => {
              acc[key] = true;
              return acc;
            },
            {} as FormTouched,
          );
          setTouched(allTouched);
          return;
        }
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, onSubmit],
  );

  
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setFormValues = useCallback((newValues: FormValues) => {
    setValues(newValues);
  }, []);

  const setFieldValue = useCallback(
    (name: string, value: string) => {
      handleChange(name, value);
    },
    [handleChange],
  );

  const setFieldError = useCallback((name: string, error: string) => {
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }, []);

  return {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    resetForm,
    setFormValues,
    setFieldValue,
    setFieldError,
  };
}

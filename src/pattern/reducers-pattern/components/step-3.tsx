import { useFormField } from "../hooks/useFormField";

export const TermsField = () => {
  const { currentStep, formData, handleChange } = useFormField();
  console.log(formData);

  return currentStep === 3 ? (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Term and conditions</h1>
      <div className="flex items-start gap-4">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className={`h-5 w-5 rounded border text-indigo-600 focus:ring-indigo-500 transition duration-150 ease-in-out `}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className={`font-medium select-none text-gray-700}`}
          >
            I agree to the Terms and Conditions
          </label>
        </div>
      </div>
    </div>
  ) : null;
};

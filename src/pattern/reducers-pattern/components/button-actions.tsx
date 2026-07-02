import { useFormField } from "../hooks/useFormField";

const ButtonForm = () => {
  const { dispatch, currentStep } = useFormField();

  return (
    <div className="flex justify-between gap-4 min-w-125">
      <div className="flex gap-4">
        <button
          disabled={currentStep === 1}
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          className="bg-transparent border rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <button
          disabled={currentStep === 3}
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="bg-transparent border rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </div>

      <div className="ml-auto">
        <button
          onClick={() => dispatch({ type: "RESET_FORM" })}
          className="bg-transparent border rounded-md p-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ButtonForm;

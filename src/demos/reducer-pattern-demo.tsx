import ButtonForm from "../pattern/reducers-pattern/components/button-actions";
import ShowField from "../pattern/reducers-pattern/components/show-field";

import { FormProvider } from "../pattern/reducers-pattern/providers/form-provider";

export const ReducerPatternDemo = () => {
  return (
    <div className="grid place-items-center h-auto gap-4 p-4 space-y-4">
      <FormProvider>
        <ShowField />
        <ButtonForm />
      </FormProvider>
    </div>
  );
};

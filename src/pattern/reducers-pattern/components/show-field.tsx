import { useFormField } from "../hooks/useFormField";
import { PersonalField } from "./step-1";
import { AccountField } from "./step-2";
import { TermsField } from "./step-3";

const ShowField = () => {
  const { formData } = useFormField();

  console.log(formData);

  return (
    <div>
      <PersonalField />
      <AccountField />
      <TermsField />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default ShowField;

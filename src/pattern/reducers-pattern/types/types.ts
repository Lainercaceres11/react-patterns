// form.types.ts

export type FormDataType = {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export type ActionType =
  | { type: "INITIAL_STATE" }
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "RESET_FORM" }
  | {
      type: "HANDLE_CHANGE";
      payload: {
        name: keyof FormDataType;
        value: string | boolean;
      };
    };

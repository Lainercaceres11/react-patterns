import type { ActionType, FormDataType } from "../types/types";

type StateType = {
  name: string;
  state: boolean;
  step: number;
};

export type InitialStateType = {
  currentStep: number;
  steps: StateType[];
  formData: FormDataType;
};

export const initialState: InitialStateType = {
  currentStep: 1,
  steps: [],
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: false,
  },
};

function formReducer(state: InitialStateType, action: ActionType) {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1),
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(3, state.currentStep + 1),
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export default formReducer;

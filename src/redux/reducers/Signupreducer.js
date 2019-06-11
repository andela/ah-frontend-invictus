import { signupType } from "../actions/types";

const initialState = {
  signupErrors: {},
  signupResponse: {
  },
  isLoading: false
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
  case signupType.SIGNUP_SUCCESS:
    return {
      ...state,
      signupErrors: {},
      signupResponse: action.payload,
      isLoading: false
    };
  case signupType.SIGNUP_ERROR:
    return {
      ...state,
      signupResponse: {},
      signupErrors: action.payload,
      isLoading: false
    };
  case signupType.IS_LOADING:
    return {
      ...state,
      isLoading: true
    };
  default:
    return state;
  }
};

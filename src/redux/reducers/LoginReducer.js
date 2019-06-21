import { loginTypes } from '../actions/types';

const initialState = {
  token: "",
  username: "",
  isLoggedIn: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
  case loginTypes.LOGIN_SUCCESS:
    return { ...state,
      login_success: payload,
      isLoggedIn: true
    };
  case loginTypes.LOGIN_FAILURE:
    return { ...state,
      login_errors: payload.response
    };
  case loginTypes.LOGOUT_SUCCESS:
    return { ...state,
      login_success: {},
      isLoggedIn: false
    };
  default:
    return state;
  }
}

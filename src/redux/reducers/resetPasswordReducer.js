import { resetpassword } from '../actions/types';

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
  case resetpassword.RESET_PASSWORD_SUCCESS:
    return {
      ...state,
      errors: [],
      message: payload.message
    };
  case resetpassword.RESET_PASSWORD_FAILURE:
    return {
      ...state,
      errors: payload,
      message: 'Request was unsuccessful'
    };
  default:
    return state;
  }
}

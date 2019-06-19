import { userTypes } from '../actions/types';
const initialState = {
  profiles: [],
  profile: {},
  errors: ""
};
export default function (state = initialState, action) {
  switch (action.type) {
  case userTypes.FETCH_USERS:
    return {
      ...state,
      profiles: action.payload
    };
  case userTypes.FETCH_USERS_FAIL:
    return {
      ...state,
      errors: action.payload
    };
  default:
    return state;
  }
}

import { userTypes } from '../actions/types';
const initialState = {
  profiles: [],
  profile: {},
  errors: ""
};
export default function (state = initialState, action) {
  switch (action.type) {
  case userTypes.FOLLOW_USER:
    return {
      ...state,
      profiles: action.payload
    };
  case userTypes.FOLLOW_USER_FAIL:
    return {
      ...state,
      errors: action.payload
    };
  default:
    return state;
  }
}

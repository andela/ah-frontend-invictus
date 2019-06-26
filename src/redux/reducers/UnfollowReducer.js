import { userTypes } from '../actions/types';
const initialState = {
  profiles: [],
  profile: {},
  errors: ""
};
export default function (state = initialState, action) {
  switch (action.type) {
  case userTypes.UNFOLLOW:
    return {
      ...state,
      profiles: action.payload
    };
  case userTypes.UNFOLLOW_FAIL:
    return {
      ...state,
      errors: action.payload
    };
  default:
    return state;
  }
}

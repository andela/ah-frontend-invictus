import { profileTypes } from '../actions/types';

const initialState = {
  profile: {},
  isLoading: false,
  editSuccess: false
};

export default function (state = initialState, action) {
  switch (action.type) {
  case profileTypes.IS_LOADING:
    return {
      ...state,
      isLoading: true };
  case profileTypes.PROFILE_VIEW:
    return {
      ...state,
      profile: action.payload,
      isLoading: false
    };
  case profileTypes.PROFILE_VIEW_FAILED:
    return {
      ...state,
      error: action.payload,
      isLoading: false
    };
  case profileTypes.EDIT_PROFILE:
    return {
      ...state,
      profile: action.payload,
      editSuccess: true
    };
  default:
    return state;
  }
}

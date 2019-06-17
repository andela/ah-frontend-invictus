import { commentTypes } from '../actions/types';
const initialState = {
  comments: [],
  comment: {},
  errors: ""
};
export default function (state = initialState, action) {
  switch (action.type) {
  case commentTypes.FETCH_COMMENTS:
    return {
      ...state,
      comments: action.payload
    };
  case commentTypes.FETCH_COMMENTS_FAIL:
    return {
      ...state,
      errors: action.payload
    };
  default:
    return state;
  }
}

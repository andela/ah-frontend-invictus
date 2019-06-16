import { commentTypes } from '../actions/types';

const initialState = {
  comments: [],
  comment: {},
  errors: ""
};
export default function (state = initialState, action) {
  switch (action.type) {
  case commentTypes.CREATE_COMMENTS:
    console.log(action.payload);
    return {
      ...state,
      comments: action.payload
    };
  case commentTypes.CREATE_COMMENTS_FAIL:
    return {
      ...state,
      errors: "Your session token has expired"
    };
  default:
    return state;
  }
}

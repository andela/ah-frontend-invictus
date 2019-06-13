import { dislikeTypes } from '../actions/types';

const initialState = {
  dislike: '',
  errors: ''
};

const { DISLIKE_ARTICLE_SUCCESS, DISLIKE_ARTICLE_REVOKE, DISLIKE_ARTICLE_LIKE, DISLIKE_ARTICLE_FAIL } = dislikeTypes;

export default function (state = initialState, action) {
  switch (action.type) {
  case DISLIKE_ARTICLE_SUCCESS:
    return {
      ...state,
      dislike: action.payload
    };
  case DISLIKE_ARTICLE_REVOKE:
    return {
      ...state,
      dislike: action.payload
    };

  case DISLIKE_ARTICLE_LIKE:
    return {
      ...state,
      dislike: action.payload
    };

  case DISLIKE_ARTICLE_FAIL:
    return {
      ...state,
      errors: "Your session token has expired"
    };

  default:
    return state;
  }
}

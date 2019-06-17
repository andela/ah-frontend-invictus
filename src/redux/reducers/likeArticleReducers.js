import { likeTypes } from '../actions/types';

const initialState = {
  like: '',
  errors: ''
}
;

const { LIKE_ARTICLE_SUCCESS, LIKE_ARTICLE_REVOKE, LIKE_ARTICLE_DISLIKE, LIKE_ARTICLE_FAIL } = likeTypes;

export default function (state = initialState, action) {
  switch (action.type) {
  case LIKE_ARTICLE_SUCCESS:
    return {
      ...state,
      like: action.payload
    };
  case LIKE_ARTICLE_REVOKE:
    return {
      ...state,
      like: action.payload
    };

  case LIKE_ARTICLE_DISLIKE:
    return {
      ...state,
      like: action.payload
    };

  case LIKE_ARTICLE_FAIL:
    return {
      ...state,
      errors: "Your session token has expired"
    };

  default:
    return state;
  }
}

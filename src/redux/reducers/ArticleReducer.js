import { articleTypes } from '../actions/types';

const initialState = {
  postedArticle: "",
  errors: ""
};

const { CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAIL } = articleTypes;

export default function (state = initialState, action) {
  switch (action.type) {
  case CREATE_ARTICLE_SUCCESS:
    return {
      ...state,
      postedArticle: action.payload
    };
  case CREATE_ARTICLE_FAIL:
    return {
      ...state,
      errors: "Your session token has expired"
    };

  default:
    return state;
  }
}

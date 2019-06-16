import { articleTypes } from '../actions/types';

const initialState = {
  article: {}
};

const getArticleReducer = (state = initialState, action) => {
  switch (action.type) {
  case articleTypes.FETCH_ARTICLE:
    return {
      ...state,
      article: action.payload
    };
  default:
    return state;
  }
};

export default getArticleReducer;

import { articlesTypes } from '../actions/types';

const initialState = {
  articles: []
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
  case articlesTypes.FETCH_ARTICLES:
    return {
      ...state,
      articles: action.payload
    };
  default:
    return state;
  }
};

export default ArticlesReducer;

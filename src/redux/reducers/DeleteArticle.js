import { deleteArticleTypes } from "../actions/types";

const initialState = {
  deleteArticleErrors: {},
  deleteArticleResponse: {}
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
  case deleteArticleTypes.DELETE_ARTICLE_SUCCESS:
    return {
      ...state,
      deleteArticleErrors: {},
      deleteArticleResponse: action.payload
    };
  case deleteArticleTypes.DELETE_ARTICLE_ERROR:
    return {
      ...state,
      deleteArticleResponse: {},
      deleteArticleErrors: action.payload
    };
  default:
    return state;
  }
};

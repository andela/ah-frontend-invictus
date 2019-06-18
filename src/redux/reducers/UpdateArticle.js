import { updateArticleTypes } from "../actions/types";

const initialState = {
  updateArticleErrors: {},
  updateArticleResponse: {}
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
  case updateArticleTypes.UPDATE_ARTICLE_SUCCESS:
    return {
      ...state,
      updateArticleErrors: {},
      updateArticleResponse: action.payload
    };
  case updateArticleTypes.UPDATE_ARTICLE_ERROR:
    return {
      ...state,
      updateArticleResponse: {},
      updateArticleErrors: action.payload
    };
  default:
    return state;
  }
};

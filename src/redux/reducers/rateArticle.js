import { rateArticleTypes } from '../actions/types';

const initialState = { changed: false };

const { RATE_ARTICLE } = rateArticleTypes;

export default function (state = initialState, action) {
  switch (action.type) {
  case RATE_ARTICLE:
    return {
      ...state,
      message: action.payload.message,
      changed: !state.changed
    };
  default:
    return state;
  }
}

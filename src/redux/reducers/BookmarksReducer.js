import { bookmarkTypes } from '../actions/types';

const initialState = {
  bookmark: '',
  errors: ''
};

const { CREATE_BOOKMARK_SUCCESS, CREATE_BOOKMARK_ALREADY, CREATE_BOOKMARK_NO_ARTICLE, CREATE_BOOKMARK_FAIL } = bookmarkTypes;

export default function (state = initialState, action) {
  switch (action.type) {
  case CREATE_BOOKMARK_SUCCESS:
    return {
      ...state,
      bookmark: action.payload
    };
  case CREATE_BOOKMARK_ALREADY:
    return {
      ...state,
      bookmark: action.payload
    };

  case CREATE_BOOKMARK_NO_ARTICLE:
    return {
      ...state,
      bookmark: action.payload
    };

  case CREATE_BOOKMARK_FAIL:
    return {
      ...state,
      bookmark: action.payload
    };

  default:
    return state;
  }
}

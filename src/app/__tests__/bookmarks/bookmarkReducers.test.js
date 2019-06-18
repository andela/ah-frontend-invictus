import reducer from '../../../redux/reducers/BookmarksReducer';
import { bookmarkTypes } from '../../../redux/actions/types';

describe('Initial bookmark reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ bookmark: '', errors: '' });
  });
});

describe('on succesfull bookmark creation', () => {
  let newState;
  const initialState = {
    bookmark: '',
    errors: ''
  };
  it('should add bookmark', () => {
    const payload = {
      bookmark: {
        id: 12,
        article_id: 128,
        username: "marcus",
        article_title: "Movies on rails",
        date_created: "2019-06-18T18:40:17.870271Z"
      }
    };
    newState = reducer(undefined,
      {
        type: bookmarkTypes.CREATE_BOOKMARK_SUCCESS,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      bookmark: payload
    });
  });
});

describe('on article bookmark failure', () => {
  let newState;
  const initialState = {
    bookmark: '',
    errors: ''
  };
  it('should fail to create bookmark twice', () => {
    const payload = {
      error: "You already bookmarked this Article"
    };
    newState = reducer(undefined,
      {
        type: bookmarkTypes.CREATE_BOOKMARK_ALREADY,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      bookmark: payload
    });
  });
  it('should fail to create bookmark when article is not existing', () => {
    const payload = {
      error: "Article does not exist"
    };
    newState = reducer(undefined,
      {
        type: bookmarkTypes.CREATE_BOOKMARK_NO_ARTICLE,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      bookmark: payload
    });
  });
  it('should fail to create bookmark when token has expired', () => {
    const payload = {
      detail: "The token has expired, please login again."
    };
    newState = reducer(undefined,
      {
        type: bookmarkTypes.CREATE_BOOKMARK_FAIL,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      bookmark: payload
    });
  });
});

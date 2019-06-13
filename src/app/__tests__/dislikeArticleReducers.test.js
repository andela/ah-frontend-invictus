import reducer from '../../redux/reducers/dislikeArticleReducers';
import { dislikeTypes } from '../../redux/actions/types';

describe('Initial article reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ dislike: '', errors: '' });
  });
});

describe('on succesfull article dislike', () => {
  let newState;
  const initialState = {
    dislike: '',
    errors: ''
  };
  it('should dislike article', () => {
    const payload = {
      success: "You have successfully disliked this article."
    };
    newState = reducer(undefined,
      {
        type: dislikeTypes.DISLIKE_ARTICLE_SUCCESS,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      dislike: payload
    });
  });
  it('should revoke dislike article', () => {
    const payload = {
      message: "Your dislike has been revoked"
    };
    newState = reducer(undefined,
      {
        type: dislikeTypes.DISLIKE_ARTICLE_REVOKE,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      dislike: payload
    });
  });
  it('it should change like to dislike article', () => {
    const payload = {
      success: "Your like for the article has changed to a dislike."
    };
    newState = reducer(undefined,
      {
        type: dislikeTypes.DISLIKE_ARTICLE_LIKE,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      dislike: payload
    });
  });
});

describe('on article dislike failure', () => {
  let newState;
  const initialState = {
    dislike: '',
    errors: ''
  };
  it('should fail to dislike article', () => {
    const payload = "Your session token has expired";
    newState = reducer(undefined,
      {
        type: dislikeTypes.DISLIKE_ARTICLE_FAIL,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      errors: payload
    });
  });
});

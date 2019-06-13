import reducer from '../../redux/reducers/likeArticleReducers';
import { likeTypes } from '../../redux/actions/types';

describe('Initial article reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ like: '', errors: '' });
  });
});

describe('on succesfull article like', () => {
  let newState;
  const initialState = {
    like: '',
    errors: ''
  };
  it('should like article', () => {
    const payload = {
      success: "You have successfully liked this article."
    };
    newState = reducer(undefined,
      {
        type: likeTypes.LIKE_ARTICLE_SUCCESS,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      like: payload
    });
  });
  it('should revoke like article', () => {
    const payload = {
      message: "Your like has been revoked"
    };
    newState = reducer(undefined,
      {
        type: likeTypes.LIKE_ARTICLE_REVOKE,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      like: payload
    });
  });
  it('it should change dislike to like article', () => {
    const payload = {
      success: "Your dislike for the article has changed to a like."
    };
    newState = reducer(undefined,
      {
        type: likeTypes.LIKE_ARTICLE_DISLIKE,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      like: payload
    });
  });
});

describe('on article like failure', () => {
  let newState;
  const initialState = {
    like: '',
    errors: ''
  };
  it('should fail to like article', () => {
    const payload = "Your session token has expired";
    newState = reducer(undefined,
      {
        type: likeTypes.LIKE_ARTICLE_FAIL,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      errors: payload
    });
  });
});

import { likeArticle } from '../../redux/actions/ArticleActions';
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { likeTypes } from '../../redux/actions/types';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('like article action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create like successfully", () => {
    const data = {
      success: "You have successfully liked this article."
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    const actionExpected = [
      {
        type: likeTypes.LIKE_ARTICLE_SUCCESS,
        payload: data
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(likeArticle({}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should revoke like successfully", () => {
    const data = {
      message: "Your like has been revoked"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    const actionExpected = [
      {
        type: likeTypes.LIKE_ARTICLE_REVOKE,
        payload: data
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(likeArticle(5, {}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should change dislike to like successfully", () => {
    const data = {
      success: "Your dislike for the article has changed to a like."
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    const actionExpected = [
      {
        type: likeTypes.LIKE_ARTICLE_DISLIKE,
        payload: data
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(likeArticle({}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
  it("should fail to like successfully", () => {
    const data = {
      article: {
        detail: "The token has expired, please login again."
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: data
      });
    });
    const actionExpected = [
      {
        type: likeTypes.LIKE_ARTICLE_FAIL,
        payload: "error"
      }
    ];
    const store = mockStore({});

    const props = {
      history: {
        push: jest.fn()
      }
    };
    const articleId = 3;
    return store
      .dispatch(likeArticle( articleId, props))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
});

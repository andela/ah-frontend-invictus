import { dislikeArticle } from '../../redux/actions/ArticleActions';
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { dislikeTypes } from '../../redux/actions/types';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('dislike article action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create dislike successfully", () => {
    const data = {
      success: "You have successfully disliked this article."
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
        type: dislikeTypes.DISLIKE_ARTICLE_SUCCESS,
        payload: data
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(dislikeArticle({}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should revoke dislike successfully", () => {
    const data = {
      message: "Your dislike has been revoked"
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
        type: dislikeTypes.DISLIKE_ARTICLE_REVOKE,
        payload: data
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(dislikeArticle(4, {}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should change like to dislike successfully", () => {
    const data = {
      success: "Your like for the article has changed to a dislike."
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
        type: dislikeTypes.DISLIKE_ARTICLE_LIKE,
        payload: data
      }
    ];
    const store = mockStore({});
    const props = {
      history: {
        push: jest.fn()
      }
    };
    return store
      .dispatch(dislikeArticle(4, props))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should fail to dislike successfully", () => {
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
        type: dislikeTypes.DISLIKE_ARTICLE_FAIL,
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
      .dispatch(dislikeArticle(articleId, props))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
});

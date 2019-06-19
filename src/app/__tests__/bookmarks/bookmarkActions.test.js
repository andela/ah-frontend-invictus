import { bookmarkArticle } from '../../../redux/actions/ArticleActions';
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { bookmarkTypes } from '../../../redux/actions/types';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('bookmark article action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create bookmark successfully", () => {
    const data = {
      bookmark: {
        id: 13,
        article_id: 129,
        username: "marcus",
        article_title: "JavaScript vs Python",
        date_created: "2019-06-18T19:03:53.751593Z"
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: data
      });
    });
    const actionExpected = [
      {
        type: bookmarkTypes.CREATE_BOOKMARK_SUCCESS,
        payload: data
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(bookmarkArticle({}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should not bookmark more than once", () => {
    const data = {
      error: "You already bookmarked this Article"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: data
      });
    });
    const actionExpected = [
      {
        type: bookmarkTypes.CREATE_BOOKMARK_ALREADY,
        payload: 'error'
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(bookmarkArticle(4, {}))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should change fail to bookmark an article that isn't there", () => {
    const data = {
      error: "Article does not exist"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: data
      });
    });
    const actionExpected = [
      {
        type: bookmarkTypes.CREATE_BOOKMARK_NO_ARTICLE,
        payload: 'error'
      }
    ];
    const store = mockStore({});
    const props = {
      history: {
        push: jest.fn()
      }
    };
    return store
      .dispatch(bookmarkArticle(4, props))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should fail to bookmark if token expired", () => {
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
        type: bookmarkTypes.CREATE_BOOKMARK_FAIL,
        payload: 'error'
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
      .dispatch(bookmarkArticle(articleId, props))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
});

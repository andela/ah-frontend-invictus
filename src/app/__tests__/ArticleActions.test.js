import { postArticle } from '../../redux/actions/ArticleActions';
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { articleTypes } from '../../redux/actions/types';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('post article action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should create article successfully", () => {
    const data = {
      article: {
        article: {
          id: 35,
          title: "Eng gets his campus sweetheart",
          description: "There was lots of kikomando at breakfast",
          body: "There was a beautiful sunset.",
          slug: "eng-gets-his-campus-sweetheart",
          created_at: "2019-06-07T12:46:26.341846Z",
          updated_at: "2019-06-07T12:46:26.341884Z",
          likes_count: 0,
          dislikes_count: 0,
          favorited: false,
          favorite_count: 0,
          author: "marcus",
          tagList: [],
          read_time: "less than a minute read",
          social_links: {
            facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A//inviticus-staging.herokuapp.com/api/articles/35/retrieve/",
            twitter: "https://twitter.com/home?status=https%3A//inviticus-staging.herokuapp.com/api/articles/35/retrieve/",
            email: "mailto:?&subject=Authors%20Haven%3A%20Eng%20gets%20his%20campus%20sweetheart&body=Follow%20Link%20To%20View%20Article%20https%3A//inviticus-staging.herokuapp.com/api/articles/35/retrieve/"
          }
        }
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
        type: articleTypes.CREATE_ARTICLE_SUCCESS,
        payload: data
      }
    ];
    const articleDetails = {
      title: "Town Hall at Andela",
      description: "The June babies had a lot of cake",
      body: "There was a great announcement by the CD about the changes about to take place in the company"
    };
    const store = mockStore({});
    return store
      .dispatch(postArticle(articleDetails))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it("should c create article successfully", () => {
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
        type: articleTypes.CREATE_ARTICLE_FAIL,
        payload: data
      }
    ];
    const articleDetails = {
      title: "Town Hall at Andela",
      description: "The June babies had a lot of cake",
      body: "There was a great announcement by the CD about the changes about to take place in the company"
    };
    const store = mockStore({});
    return store
      .dispatch(postArticle(articleDetails))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
});

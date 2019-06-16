import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import fetchArticle from '../../../redux/actions/articles/ArticleActions';
import { articleTypes } from '../../../redux/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch articles', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('successfully fetches an article', () => {
    const response = {
      data: {
        article: {
          id: 1,
          body: 'Test',
          description: 'Test'
        }
      }
    }
    const store = mockStore({ articles: [] });
    const expectedActions = [
      {
        type: articleTypes.FETCH_ARTICLE,
        payload: response.data.article
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response.data
      });
    });
    return store.dispatch(fetchArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

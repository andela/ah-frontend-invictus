import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { searchKeyword } from '../../../redux/actions/searchActions';
import { searchTypes } from '../../../redux/actions/types';
import thunk from 'redux-thunk';

const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe('searchkeyword', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  it('should filter', () => {

    const expectedData = {
      data: {
        article: {
          id: 1,
          body: 'Test',
          description: 'Test'
        }
      }
    };
    const url = "https://inviticus-staging.herokuapp.com/api/articles/all/?tag=pink"
    const expecetedActions = [
      {
        payload: {
          data: {
            article: {
              id: 1,
              body: 'Test',
              description: 'Test'
            }
          }
        },
        type: 'RESULTS'
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedData
      });
    });
    const store = mockStore({});
    return store.dispatch(searchKeyword(url))
      .then(() => {
        expect(store.getActions()).toEqual(expecetedActions);
      });

  })
})

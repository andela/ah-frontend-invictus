import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import socialAuth from '../../../redux/actions/socialAuth/socialAuthAction';
import { socialTypes } from '../../../redux/actions/types';

// shared constants
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('facebook authenticaton action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('successfull social authentication', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          email: 'Test email',
          message: 'Test message',
          token: 'Test token',
          username: 'Test username'
        }
      });
    });
    const expectedActions = [
      { type: socialTypes.FACEBOOK_AUTH,
        payload: {
          email: 'Test email',
          message: 'Test message',
          token: 'Test token',
          username: 'Test username'
        }
      }
    ];
    return store.dispatch(socialAuth('Test facebook token')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('catches error on unsuccessful authentication', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          error: 'Token is invalid.'
        }
      });
    });
    const expectedAction = [
      {type: socialTypes.FACEBOOK_AUTH,
        payload: {
          error: 'Token is invalid.'
        }
      }
    ];
    return store.dispatch(socialAuth('The google fake token')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { loginTypes } from '../../../redux/actions/types';
import { loginAction } from '../../../redux/actions/LoginActions';


describe('Testing Auth Action', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('Testing User authentication success', () => {
    const expectedResponse = {
      user: {
        username: "james20",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.",
        email: "kisuulejames1@gmail.com"
      }
    };
    const expectedActions = [
      {
        type: loginTypes.LOGIN_SUCCESS,
        payload: expectedResponse
      }
    ];

    const returnedResponse = [
      {
        payload: {
          user: {
            email: "kisuulejames1@gmail.com",
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.",
            username: "james20"
          }
        },
        type: "USERS_LOGIN_SUCCESS"
      }
    ];
    const userData = {
      user: {
        email: "kisuulejames1@gmail.com",
        password: "Test@12345"
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse
      });
    });
    const store = mockStore({});
    return store.dispatch(loginAction(userData)).then(() => {
      expect(returnedResponse).toEqual(expectedActions);
    });
  });

  it('Testing User authentication fails', () => {
    const expectedResponse = {
      errors: {
        error: [
          "A user with this email and password was not found."
        ]
      }
    };
    const expectedActions = [
      {
        type: loginTypes.LOGIN_FAILURE,
        payload: expectedResponse
      }
    ];
    const userData = {
      user: {
        email: "kisuulejames1hfhfh@gmail.com",
        password: "Test@12345"
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedResponse
      });
    });
    const store = mockStore({});
    return store.dispatch(loginAction(userData)).then(() => {
      expect(expectedActions).toEqual(expectedActions);
    });
  });
});

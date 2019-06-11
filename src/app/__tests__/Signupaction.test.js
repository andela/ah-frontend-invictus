import { signupUserAction } from "../../redux/actions/Signupactions";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { signupType } from "../../redux/actions/types";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('signupUserAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should signup successfully", () => {
    const data = {
      username: 'sasasasuuuuu',
      email: 'sanyakensasasawqwqwneth@gmail.com',
      message: 'Check your email address to confirm registration.'
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
        type: signupType.IS_LOADING
      },
      {
        type: signupType.SIGNUP_SUCCESS,
        payload: data
      }
    ];
    const userData = {
      user: {
        email: "kenneth.sanya@andela.com",
        password: "Test@1234",
        username: "sanyatest"
      }
    };
    const store = mockStore({});
    return store
      .dispatch(signupUserAction(userData))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
  it('should return errors on failure to signup', () => {
    const error = {
      username: [],
      email: [],
      message: []
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: error
      });
    });
    const actionExpected = [

      {
        type: signupType.IS_LOADING
      },
      {
        type: signupType.SIGNUP_ERROR,
        payload: error
      }
    ];
    const userData = {
      user: {
        email: "k",
        password: "Test1234",
        username: "t"
      }
    };
    const store = mockStore({});
    return store
      .dispatch(signupUserAction(userData))
      .catch(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
});

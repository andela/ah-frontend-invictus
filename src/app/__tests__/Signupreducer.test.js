import signupReducer from "../../redux/reducers/Signupreducer";
import { signupType } from "../../redux/actions/types";

const state = {
  signupErrors: {},
  signupResponse: {},
  isLoading: false
};

const data = {
  username: 'sasasasuuuuu',
  email: 'sanyakensasasawqwqwneth@gmail.com',
  message: 'Check your email address to confirm registration.'
};

describe('signup reducer test', () => {
  it('it tests the reducer is called', () => {
    const newstate = signupReducer(state, {});
    expect(newstate).toEqual(state);
  });
});
describe('signup reducer success test', () => {
  let newState;
  it('should return a signup_response object', () => {
    newState = signupReducer(state,
      {
        type: signupType.SIGNUP_SUCCESS,
        payload: data,
        isLoading: false
      });
    expect(newState).toEqual({
      ...state, signupResponse: data
    });
  });
});
describe('signup reducer failure test', () => {
  let newState;
  it('should return a signup_error object', () => {
    newState = signupReducer(state,
      {
        type: signupType.SIGNUP_ERROR,
        payload: {}
      });
    expect(newState).toEqual({
      ...state,
      signupErrors: {},
      isLoading: false

    });
  });
  it('should set loading to true', () => {
    newState = signupReducer(state,
      {
        type: signupType.IS_LOADING,
        isLoading: true
      }
    );
    expect(newState).toEqual({
      ...state,
      isLoading: true
    });
  });
});

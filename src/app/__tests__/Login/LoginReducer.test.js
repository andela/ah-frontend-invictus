import { loginTypes } from '../../../redux/actions/types';
import loginReducer from '../../../redux/reducers/LoginReducer';

const initialState = {};
describe('Test for Login reducer', () => {
  it('should successfully login', () => {
    const dispatchedAction = {
      type: loginTypes.LOGIN_SUCCESS,
      payload: {
        username: "james12",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
        email: "getjames20@gmail.com"
      }
    };
    const newState = {
      isLoggedIn: true,
      login_success: {
        email: 'getjames20@gmail.com',
        username: 'james12',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
      }
    };
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it('should unsuccessfully login', () => {
    const dispatchedAction = {
      type: loginTypes.LOGIN_FAILURE,
      payload: {
        login_errors: {}
      }
    };
    const newState = {};
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});

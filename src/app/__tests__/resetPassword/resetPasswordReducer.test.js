import reducer from '../../../redux/reducers/resetPasswordReducer';
import { resetpassword } from '../../../redux/actions/types';

describe('ResetPassword reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({});
  });
  describe('On Success', () => {
    let newState;
    it('should return a message', () => {
      newState = reducer(undefined,
        {
          type: resetpassword.RESET_PASSWORD_SUCCESS,
          payload: {
            message: 'Check your email'
          }
        });
      expect(newState).toEqual({
        errors: [],
        message: 'Check your email'
      });
    });
  });
  describe('On failure', () => {
    let newState;
    it('should return a message', () => {
      newState = reducer(undefined,
        {
          type: resetpassword.RESET_PASSWORD_FAILURE,
          payload: ['No account.']
        });
      expect(newState).toEqual({
        errors: ["No account."],
        message: "Request was unsuccessful"
      });
    });
  });
});

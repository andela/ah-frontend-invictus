import reducer from '../../../redux/reducers/resetPasswordReducer';
import RateArticle from '../../../redux/reducers/rateArticle';
import { resetpassword, rateArticleTypes } from '../../../redux/actions/types';

describe('ResetPassword reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({});
  });
  describe('should return rating', () => {
    const newState = RateArticle(undefined, {
      type: rateArticleTypes.RATE_ARTICLE,
      payload: {message: "message"}
    });
    expect(newState).toEqual({message: "message", changed: true});
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

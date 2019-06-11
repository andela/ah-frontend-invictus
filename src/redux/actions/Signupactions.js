import { signupType } from "../actions/types";
import axios from "axios";
import { APP_URLS } from '../../app/utils';

export const signupUserAction = (signupData) => dispatch => {
  const { username, email, password } = signupData;
  dispatch({
    type: signupType.IS_LOADING
  });
  return axios.post(APP_URLS.SIGNUP_URL,
    {
      user: {
        username: username,
        email: email,
        password: password
      }
    })
    .then(response => {
      dispatch({
        type: signupType.SIGNUP_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: signupType.SIGNUP_ERROR,
        payload: error.response.data.errors
      });
    });
};

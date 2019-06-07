import axios from 'axios';
import { resetpassword } from './types';
import { APP_URLS } from '../../utilities';

export const handleErrors = (err, dispatch) => {
  if (err.response) {
    let errors = err.response.data.errors;
    if (errors === undefined) {errors = { error: [err.response.data.message] };}
    if (!errors.error) {
      errors = { error: errors };
    }
    dispatch({
      type: resetpassword.RESET_PASSWORD_FAILURE,
      payload: errors.error
    });
  }
};

export const resetPasswordRequestAction = body => dispatch => {
  return axios.post(`${APP_URLS.BACK_END}api/reset_password/`, body)
    .then(resp => {
      dispatch({
        type: resetpassword.RESET_PASSWORD_SUCCESS,
        payload: resp.data.user
      });
    })
    .catch(e => handleErrors(e, dispatch));
};

export const resetPasswordAction = body => dispatch => {
  return axios.post(`${APP_URLS.BACK_END}api/reset_password/${body.token}/`, body)
    .then(resp => {
      dispatch({
        type: resetpassword.RESET_PASSWORD_SUCCESS,
        payload: resp.data
      });
    })
    .catch(e => handleErrors(e, dispatch));
};

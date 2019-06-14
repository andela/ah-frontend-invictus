import { socialTypes } from '../types';
import axios from 'axios';
import { googleUrl, facebookUrl } from '../../../app/urls';

const socialAuth = (accessToken, authType) => dispatch => {
  const { FACEBOOK_AUTH, GOOGLE_AUTH } = socialTypes;
  const url = authType === 'google' ? googleUrl : facebookUrl;
  const type = authType === 'google' ? GOOGLE_AUTH : FACEBOOK_AUTH;
  return axios.post(url, { access_token: accessToken })
    .then(response => {
      const { token } = response.data;
      localStorage.setItem('user_token', token);
      document.location.href = '/';
      dispatch({
        type,
        payload: response.data
      });
    })
    .catch(error => dispatch({
      type,
      payload: error.response.data
    }));
};

export default socialAuth;

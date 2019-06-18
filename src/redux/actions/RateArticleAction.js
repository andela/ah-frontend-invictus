import axios from 'axios';
import { rateArticleTypes } from './types';
import { APP_URLS } from '../../utilities';
import { handleErrors } from '../../app/containers/rateArticleUtil';

const { RATE_ARTICLE } = rateArticleTypes;

let headers = {};
headers['Content-Type'] = 'application/json';
headers['Authorization'] = `Bearer ${localStorage.getItem('user_token')}`;

export const rateArticleAction = (body, articleId) => dispatch => {
  return axios.post(`${
    APP_URLS.BACK_END
  }api/articles/${ articleId }/rating/`, body, { headers })
    .then(resp => {
      dispatch({
        type: RATE_ARTICLE,
        payload: resp.data
      });
    })
    .catch(handleErrors);
};

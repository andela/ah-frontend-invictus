import { articleTypes } from '../../actions/types';
import axios from 'axios';
import { fetchArticleUrl } from '../../../app/urls';

let authorizationHeader = localStorage.getItem('user_token');

const fetchArticle = (id) => dispatch => {
  return axios.get(`${fetchArticleUrl}${id}/`, {
    headers: { Authorization: `Bearer ${authorizationHeader}` }
  })

    .then(response => {
      console.log(response.data.article);
      dispatch({
        type: articleTypes.FETCH_ARTICLE,
        payload: response.data.article
      });
    });
};

export default fetchArticle;

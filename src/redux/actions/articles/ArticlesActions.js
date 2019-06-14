import { articlesTypes } from '../types';
import axios from 'axios';
import { fetchArticlesUrl } from '../../../app/urls';

let authorizationHeader = localStorage.getItem('user_token');

const fetchArticles = () => dispatch => {
  return axios.get(fetchArticlesUrl, {
    headers: { Authorization: `Bearer ${authorizationHeader}` }
  })
    .then(response => {
      dispatch({
        type: articlesTypes.FETCH_ARTICLES,
        payload: response.data.article.results
      });
    });
};

export default fetchArticles;

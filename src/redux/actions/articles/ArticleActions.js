import { articleTypes } from '../../actions/types';
import axios from 'axios';
import { fetchArticleUrl } from '../../../app/urls';

const fetchArticle = (id) => dispatch => {
  return axios.get(`${fetchArticleUrl}${id}/retrieve/`, {
  })
    .then(response => {
      dispatch({
        type: articleTypes.FETCH_ARTICLE,
        payload: response.data[0]
      });
    });
};

export default fetchArticle;

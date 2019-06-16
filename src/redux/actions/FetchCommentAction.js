import axios from 'axios';
import { commentTypes } from './types';
import { commentUrl } from './commentUrl';

let authToken = localStorage.getItem('user_token');
export const fetchComments = (articleId) => dispatch => {
  // console.log(authToken);
  return axios.get(commentUrl(articleId),
    {
      headers: { Authorization: `Bearer ${authToken}` }
    })
    .then(response => {
      dispatch({
        type: commentTypes.FETCH_COMMENTS,
        payload: response.data.comments
      });
    }).catch(error => {
      dispatch({
        type: commentTypes.FETCH_COMMENTS_FAIL,
        payload: { errors: "Comment not found." }
      });
    });
};



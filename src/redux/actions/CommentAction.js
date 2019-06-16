import { toast } from 'react-toastify';
import axios from 'axios';
import { commentTypes } from './types';
import { commentUrl } from './commentUrl';

let auth = localStorage.getItem('user_token');
export const postComment = (articleId, commentDetails) => dispatch => {
  return axios.post(commentUrl(articleId),
    {
      comment: {
        body: String(commentDetails)
      }
    },
    { headers: { Authorization: `Bearer ${auth}` } })
    .then(response => {
      const { status } = response;
      if (status === 201) {
        dispatch({
          type: commentTypes.CREATE_COMMENTS,
          payload: response.data.message
        });
        toast.success(
          'You have successfully commented on an article', 'success', 5000);
      }
    }).catch((error) => {
      toast.error('The token has expired, please login again.', 'error', 5000);
      dispatch({
        type: commentTypes.CREATE_COMMENTS_FAIL,
        payload: "This field is required."
      });
    }
    );
};


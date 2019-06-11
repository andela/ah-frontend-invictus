import axios from 'axios';
import { articleTypes } from './types';
import { toast } from 'react-toastify';

export const postArticle = (articleUrl, articleDetails, headers) => dispatch =>
  axios.post(articleUrl, articleDetails, { headers }).then(response => {
    const { status } = response;
    if (status === 201) {
      dispatch({ type: articleTypes.CREATE_ARTICLE_SUCCESS, payload: response.data });
      toast.dismiss();
      toast.success("You have created the article", {
        hideProgressBar: false,
        autoClose: 3000
      });
    }
  }).catch((error) => {
    if (error.response.status === 403) {
      dispatch({ type: articleTypes.CREATE_ARTICLE_FAIL, payload: error.response.data });
      toast.dismiss();
      toast.error("The token has expired, please login again.", {
        hideProgressBar: false,
        autoClose: 3000
      });
    }
  }
  );

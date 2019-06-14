import { deleteArticleTypes } from "../actions/types";
import { toast } from 'react-toastify';
import axios from "axios";
import { articleUrl } from '../../app/utils';

let auth = localStorage.getItem("user_token");

export const deleteArticleAction = (articleId) => dispatch => {
  return axios.delete(articleUrl + `${articleId}/`,
    {
      headers: { Authorization: `Bearer ${auth}` }
    })
    .then(response => {
      if (response.data.article === "You have succesfully deleted the article") {
        toast.success(":) Your article was successfuly deleted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000
        });
        dispatch({
          type: deleteArticleTypes.DELETE_ARTICLE_SUCCESS,
          payload: response.data
        });
        setTimeout(() => { window.location.href = '/articles'; }, 2000);
      } else {
        toast.error(":( " + response.data.article, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
        });
      }
    })
    .catch(error => {
      toast.error(":( " + error.response.data.article.detail, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      dispatch({
        type: deleteArticleTypes.DELETE_ARTICLE_ERROR,
        payload: error.response.data
      });
    });
};

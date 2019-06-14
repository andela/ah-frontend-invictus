import { updateArticleTypes } from "../actions/types";
import { toast } from 'react-toastify';
import axios from "axios";
import { articleUrl } from '../../app/utils';

let auth = localStorage.getItem("user_token");

export const updateArticleAction = (id, articleData) => dispatch => {
  return axios.put(articleUrl + `${id}/`,
    articleData, {
      headers: { Authorization: `Bearer ${auth}` }
    })
    .then(response => {
      toast.success(":) Your article was successfuly updated", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
      dispatch({
        type: updateArticleTypes.UPDATE_ARTICLE_SUCCESS,
        payload: response.data
      });
      setTimeout(() => { window.location.href = '/articles/' + `${id}`; }, 2000);
    })
    .catch(error => {
      if (error) {
        toast.error(":( " + error.response.data.article.detail, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000
        });
      }
      dispatch({
        type: updateArticleTypes.UPDATE_ARTICLE_ERROR,
        payload: error.response.data
      });
    });
};

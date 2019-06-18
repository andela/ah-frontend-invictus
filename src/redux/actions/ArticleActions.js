import axios from 'axios';
import { toast } from 'react-toastify';
import { likeTypes, dislikeTypes } from '../actions/types';
import { articleTypes } from './types';

export const postArticle = (articleUrl, articleDetails, headers, props) => dispatch =>
  axios.post(articleUrl, articleDetails, { headers }).then(response => {
    const { status } = response;
    if (status === 201) {
      dispatch({ type: articleTypes.CREATE_ARTICLE_SUCCESS, payload: response.data });
      toast.dismiss();
      toast.success("You have created the article", {
        hideProgressBar: false, autoClose: 3000
      });
      document.location.href = '/';
    }
  })
    .catch((error) => {
      if (error.response.status === 403) {
        dispatch({ type: articleTypes.CREATE_ARTICLE_FAIL, payload: error.response.data });
        toast.dismiss();
        toast.error("The token has expired, please login again.", {
          hideProgressBar: false, autoClose: 3000
        });
        props.history.push('/login');
      }
    }
    );

function actionDispatch (dispatch, response, message, type) {
  dispatch({ type: type, payload: response.data });
  toast.dismiss();
  toast.success(message, {
    hideProgressBar: false,
    autoClose: 3000
  });
}

export const likeArticle = (articleId, props) => dispatch => {
  const body = {};
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`
    }
  };
  return axios.post(`https://inviticus-staging.herokuapp.com/api/articles/${articleId}/like/`, body, headers)
    .then(response => {
      if (response.data.success === "You have successfully liked this article.") {
        const message = "You have liked the article";
        actionDispatch(dispatch, response, message, likeTypes.LIKE_ARTICLE_SUCCESS);
      } else if (response.data.message === "Your like has been revoked") {
        const message = "Your like has been revoked";
        actionDispatch(dispatch, response, message, likeTypes.LIKE_ARTICLE_REVOKE);
      } else if (response.data.success === "Your dislike for the article has changed to a like.") {
        const message = "Your dislike for the article has changed to a like.";
        actionDispatch(dispatch, response, message, likeTypes.LIKE_ARTICLE_DISLIKE);
      }
    }).catch((error) => {
      dispatch({ type: likeTypes.LIKE_ARTICLE_FAIL, payload: 'error' });
      toast.dismiss();
      toast.error("The token has expired, please login again.", {
        hideProgressBar: false,
        autoClose: 3000
      });
      props.history.push('/login');
    });
};

export const dislikeArticle = (articleId, props) => dispatch => {
  const body = {};
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")}`
    }
  };

  return axios.post(`https://inviticus-staging.herokuapp.com/api/articles/${articleId}/dislike/`, body, headers)
    .then(response => {
      if (response.data.success === "You have successfully disliked this article.") {
        const message = "You have disliked the article";
        actionDispatch(dispatch, response, message, dislikeTypes.DISLIKE_ARTICLE_SUCCESS);
      } else if (response.data.message === "Your dislike has been revoked") {
        const message = "Your dislike has been revoked";
        actionDispatch(dispatch, response, message, dislikeTypes.DISLIKE_ARTICLE_REVOKE);
      } else if (response.data.success === "Your like for the article has changed to a dislike.") {
        const message = "Your like for the article has changed to a dislike.";
        actionDispatch(dispatch, response, message, dislikeTypes.DISLIKE_ARTICLE_LIKE);
      }
    }).catch((error) => {
      dispatch({ type: dislikeTypes.DISLIKE_ARTICLE_FAIL, payload: 'error' });
      toast.dismiss();
      toast.error("The token has expired, please login again.", {
        hideProgressBar: false,
        autoClose: 3000
      });
      props.history.push('/login');
    });
};

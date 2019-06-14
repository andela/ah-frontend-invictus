import axios from 'axios';
import { toast } from 'react-toastify';
import { profileTypes } from './types';
import { APP_URLS } from '../../utilities';


export const fetchProfile = () => dispatch => {
  dispatch({
    type: profileTypes.IS_LOADING
  });
  return axios.get(`${APP_URLS.BACK_END}api/users/profile/${localStorage.getItem("username")}/`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("user_token")}` }
  })
    .then(response => {
      dispatch({
        type: profileTypes.PROFILE_VIEW,
        payload: response.data.profile
      });
    })
    .catch(error => {
      toast.error(`${'An error occurred , login again'}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      dispatch({
        type: profileTypes.PROFILE_VIEW_FAILED,
        payload: error.response.data.profile.detail
      });
      document.location.href = '/login';
    });
};

export const editProfile = (newProfile) => async dispatch => {
  const profileData = {
    profile: newProfile
  };
  return await axios.put(`${APP_URLS.BACK_END}api/users/profile/${localStorage.getItem("username")}/`, profileData,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("user_token")}` }
    })
    .then(response => {
      toast.success("profile updated!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      dispatch({
        type: profileTypes.EDIT_PROFILE,
        payload: response.data.profile
      });
    })
    .catch(error => {
      dispatch({
        type: profileTypes.FAIL_EDIT,
        payload: error.response.data.profile.detail
      });
    });
};

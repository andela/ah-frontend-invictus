import axios from 'axios';
import { toast } from 'react-toastify';
import { userTypes } from './types';
import { followUrls } from './UserUrl';

let authToken = localStorage.getItem('user_token');

const followUsers = (username) => dispatch => {
  return axios.post(followUrls(username),
    {},
    {
      headers: { Authorization: `Bearer ${authToken}` }
    })
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: userTypes.FOLLOW_USER,
          payload: response.data
        },
        );
        toast.success(
          'You are following this person', 'success', 2000);
      }
      setTimeout(() => { window.location.href = '/users'; }, 3000);
    }).catch(error => {
      dispatch({
        type: userTypes.FOLLOW_USER_FAIL,
        payload: { errors: "User not found." }
      });
    });
};
export default followUsers;

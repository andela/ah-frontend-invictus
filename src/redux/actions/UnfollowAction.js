import axios from 'axios';
import { toast } from 'react-toastify';
import { userTypes } from './types';
import { unfollowUrl } from './UserUrl';

let authToken = localStorage.getItem('user_token');
const unfollowUsers = (username) => dispatch => {
  return axios.delete(unfollowUrl(username),
    {
      headers: { Authorization: `Bearer ${authToken}` }
    })
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: userTypes.UNFOLLOW,
          payload: response.data
        },
        );
        toast.success(
          'You have unfollowed this person', 'success', 2000);
      }
      setTimeout(() => { window.location.href = '/users'; }, 3000);
    }).catch(error => {
      dispatch({
        type: userTypes.UNFOLLOW_FAIL,
        payload: { errors: "User not found." }
      });
    });
};
export default unfollowUsers;

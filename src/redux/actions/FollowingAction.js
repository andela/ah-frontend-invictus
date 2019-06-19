import axios from 'axios';
import { userTypes } from './types';
import { followUrl } from './UserUrl';

let authToken = localStorage.getItem('user_token');
const followUser = (userName) => dispatch => {
  return axios.get(followUrl(userName),
    {
      headers: { Authorization: `Bearer ${authToken}` }
    })
    .then(response => {
      dispatch({
        type: userTypes.FOLLOW,
        payload: response.data
      },
      );
    }).catch(error => {
      dispatch({
        type: userTypes.FOLLOW_FAIL,
        payload: { errors: "User not found." }
      });
    });
};
export default followUser;



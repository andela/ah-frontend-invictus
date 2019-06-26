import axios from 'axios';
import { userTypes } from './types';
import { userUrls } from './UserUrl';

let authToken = localStorage.getItem('user_token');
const fetchUser = () => dispatch => {
  return axios.get(userUrls.USER_URL,
    {
      headers: { Authorization: `Bearer ${authToken}` }
    })
    .then(response => {
      dispatch({
        type: userTypes.FETCH_USERS,
        payload: response.data.profiles
      },
      );
    }).catch(error => {
      dispatch({
        type: userTypes.FETCH_USERS_FAIL,
        payload: { errors: "Not found." }
      });
    });
};

export default fetchUser;


import { notificationTypes } from "../actions/types";
import axios from "axios";
import { APP_URLS } from '../../app/utils';

let auth = localStorage.getItem("user_token");

export const notificationsAction = () => dispatch => {
  return axios.get(APP_URLS.NOTIFICATIONS,
    {
      headers: { Authorization: `Bearer ${auth}` }
    })
    .then(response => {
      dispatch({
        type: notificationTypes.NOTIFICATIONS,
        payload: response.data
      });
    });
};

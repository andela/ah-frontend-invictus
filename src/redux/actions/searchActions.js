import axios from 'axios';
import { searchTypes } from './types';

/**
 * This runs axios to get data from server based on the url
 *
 * @param {string} url
 */
export const searchKeyword = (url) => async dispatch => {
  return axios.get(url)
    .then(response => {
      dispatch({
        type: searchTypes.RESULTS,
        payload: response.data
      });
    });
};

import { searchTypes } from '../actions/types';
/**
 * @const {object}
 */
const initialState = {
  Data: []
};
/**
 * this is a function that changes state
 *
 * @param {object} state
 * @param {string} action
 */
export default function (state = initialState, action) {
  switch (action.type) {
  case searchTypes.RESULTS:
    return {
      ...state,
      Data: action.payload
    };
  default:
    return state;
  }
}

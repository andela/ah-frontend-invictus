import { combineReducers } from 'redux';
import loginReducer from '../redux/reducers/LoginReducer';

export default combineReducers({
  auth: loginReducer
});

import { combineReducers } from 'redux';
import RequestResetPassword from './reducers/resetPasswordReducer';
import loginReducer from '../redux/reducers/LoginReducer';

export default combineReducers({
  auth: loginReducer,
  RequestResetPassword: RequestResetPassword
});

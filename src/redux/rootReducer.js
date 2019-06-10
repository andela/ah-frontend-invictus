import { combineReducers } from 'redux';
import RequestResetPassword from './reducers/resetPasswordReducer';

export default combineReducers({
  RequestResetPassword: RequestResetPassword
});

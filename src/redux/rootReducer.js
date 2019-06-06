import { combineReducers } from 'redux';
import RequestResetPassword from './reducers/resetPasswordReducer';
import loginReducer from '../redux/reducers/LoginReducer';
import signupReducer from "./reducers/Signupreducer";
import ArticleReducer from './reducers/ArticleReducer';

export default combineReducers({
  signup: signupReducer,
  auth: loginReducer,
  RequestResetPassword: RequestResetPassword,
  postArticle: ArticleReducer
});

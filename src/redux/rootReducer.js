import { combineReducers } from 'redux';
import RequestResetPassword from './reducers/resetPasswordReducer';
import loginReducer from '../redux/reducers/LoginReducer';
import signupReducer from "./reducers/Signupreducer";
import ArticleReducer from './reducers/ArticleReducer';
import socialAuthReducer from './reducers/socialAuth';
import userProfileReducer from './reducers/profileReducer';
import articlesReducer from './reducers/ArticlesReducer';
import getArticleReducer from './reducers/getArticleReducer';

export default combineReducers({
  signup: signupReducer,
  auth: loginReducer,
  RequestResetPassword: RequestResetPassword,
  postArticle: ArticleReducer,
  social: socialAuthReducer,
  profileReducer: userProfileReducer,
  articles: articlesReducer,
  article: getArticleReducer
});

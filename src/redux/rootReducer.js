import { combineReducers } from 'redux';
import RequestResetPassword from './reducers/resetPasswordReducer';
import loginReducer from '../redux/reducers/LoginReducer';
import signupReducer from "./reducers/Signupreducer";
import ArticleReducer from './reducers/ArticleReducer';
import socialAuthReducer from './reducers/socialAuth';
import userProfileReducer from './reducers/profileReducer';
import articlesReducer from './reducers/ArticlesReducer';
import getArticleReducer from './reducers/getArticleReducer';
import likeArticleReducers from './reducers/likeArticleReducers';
import dislikeArticleReducers from './reducers/dislikeArticleReducers';
import CommentReducer from '../redux/reducers/CommentReducer';
import FetchCommentReducer from '../redux/reducers/FetchCommentReducer';
import rateAticle from './reducers/rateArticle';
import UpdateArticleReducer from './reducers/UpdateArticle';
import DeleteArticleReducer from './reducers/DeleteArticle';
import BookmarksReducer from './reducers/BookmarksReducer';
import NotificationsReducer from '../redux/reducers/NotificationsReducer';
import searchReducer from '../redux/reducers/Search';
import FetchUsersReducer from '../redux/reducers/FetchUsersReducer';
import FollowReducer from './reducers/FollowReducer';
import FollowUserReducer from './reducers/FollowUserReducer';
import UnfollowReducer from './reducers/UnfollowReducer';

export default combineReducers({
  signup: signupReducer,
  auth: loginReducer,
  RequestResetPassword: RequestResetPassword,
  postArticle: ArticleReducer,
  social: socialAuthReducer,
  profileReducer: userProfileReducer,
  articles: articlesReducer,
  article: getArticleReducer,
  likeArticleReducers: likeArticleReducers,
  dislikeArticleReducers: dislikeArticleReducers,
  postComment: CommentReducer,
  fetchComment: FetchCommentReducer,
  rateAticle: rateAticle,
  updateArticle: UpdateArticleReducer,
  deleteArticle: DeleteArticleReducer,
  BookmarksReducer: BookmarksReducer,
  notifications: NotificationsReducer,
  search: searchReducer,
  fetchUser: FetchUsersReducer,
  followUser: FollowReducer,
  followUsers: FollowUserReducer,
  unfollowUsers: UnfollowReducer
});

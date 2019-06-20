import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../src/app/components/Home';
import loginContainer from './app/containers/LoginContainer';
import RequestResetPassword from './app/containers/ResetPassword/RequestResetPassword';
import ResetPassword from './app/containers/ResetPassword/ResetPassword';
import SignupComponent from './app/containers/Signup';
import ArticleContainer from './app/containers/ArticleContainer';
import ProfileComponent from './app/containers/ProfileContainer';
import editProfileComponent from './app/containers/editProfileContainer';
import Article from './app/containers/articles/getArticleContainer';
import UpdateArticleContainer from './app/containers/UpdateArticle';
import SearchComponent from './app/containers/Search';


class Router extends Component {
  render () {
    return (
      <BrowserRouter >
        <ToastContainer />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={loginContainer} />
        <Route path="/password/reset" component={RequestResetPassword} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
        <Route path="/signup" component={SignupComponent} />
        <Route exact path="/create" component={ArticleContainer} />
        <Route path="/profile" component={ProfileComponent} />
        <Route path="/editprofile" component={editProfileComponent} />
        <Route exact path="/articles" component={HomePage} />
        <Route exact path="/articles/:id" component={Article} />
        <Route path="/article/update" component={UpdateArticleContainer} />
        <Route exact path="/search" component={SearchComponent}/>
      </BrowserRouter>
    );
  }
}

export default Router;

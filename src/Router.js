import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../src/app/components/Home';
import loginContainer from './app/containers/LoginContainer';
import RequestResetPassword from './app/containers/ResetPassword/RequestResetPassword';
import ResetPassword from './app/containers/ResetPassword/ResetPassword';
import SignupComponent from './app/containers/Signup';

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
      </BrowserRouter>
    );
  }
}

export default Router;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './app/containers/Home';
import LoginPage from './app/containers/Login';
import RequestResetPassword from './app/containers/ResetPassword/RequestResetPassword';
import ResetPassword from './app/containers/ResetPassword/ResetPassword';


class Router extends Component {
  render () {
    return (
      <BrowserRouter >
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/password/reset" component={RequestResetPassword} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
      </BrowserRouter>
    );
  }
}

export default Router;

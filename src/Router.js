import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../src/app/components/Home';
import loginContainer from './app/containers/LoginContainer';


class Router extends Component {
  render () {
    return (
      <BrowserRouter >
        <ToastContainer/>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={loginContainer} />
      </BrowserRouter>
    );
  }
}

export default Router;

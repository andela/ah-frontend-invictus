import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../src/app/containers/Home';
import LoginPage from './app/containers/Login';

class Router extends Component {
  render () {
    return (
      <BrowserRouter >
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </BrowserRouter>
    );
  }
}

export default Router;

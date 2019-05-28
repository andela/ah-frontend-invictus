import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Router from './Router';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
      </Provider>

    );
  }
}
export default App;

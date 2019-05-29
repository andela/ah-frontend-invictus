import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="row">
            <div className="col-md-4" />
            <p className="card col-md-4 company_name">Author's Haven</p>
            <div className="col-md-4" />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;

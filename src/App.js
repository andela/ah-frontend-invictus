import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ToastContainer/>
        <div className="App">
          <Router />
        </div>
      </Provider>
    );
  }
}
export default App;

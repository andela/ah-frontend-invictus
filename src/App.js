import React, { Component } from "react";
import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react';
import configureStore from "./redux/store";
import Router from "./Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { persistor, store } = configureStore();
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
            <Router />
            <ToastContainer />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;

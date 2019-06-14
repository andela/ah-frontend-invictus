import React, { Component } from 'react';
import NavbarComponent from '../components/Navbar';
import Articles from '../containers/articles/ArticlesContainer';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <NavbarComponent />
        <Articles />
      </React.Fragment>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import NavbarComponent from '../components/Navbar';

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <NavbarComponent />
        <img className="banner-img"
          src={require("../../assets/images/ah_banner.png")}
          alt="Banner" />
      </React.Fragment>
    );
  }
}

export default Home;

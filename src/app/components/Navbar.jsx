
import React, { Component } from 'react';
import '../../assets/styles/navbar.scss';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export class NavbarComponent extends Component {
  render () {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler nav-button" type="button"
            data-toggle="collapse" data-target="#navbarTogglerah"
            aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarTogglerah">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link></li>
            </ul>
            {isLoggedIn ? (
              <ul className="navbar-nav ml-2 ">
                <li className="nav-item">
                  <Link className="nav-link" to="/articles">Articles</Link></li>
                <li className="nav-item" />
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Logout</Link></li>
              </ul>) : (
              <ul className="navbar-nav ml-2 ">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login </Link></li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-active" to="signup">Signup </Link>
                </li>
              </ul>)}
          </div>
        </nav >
      </React.Fragment >
    );
  }
}

export const mapStateToProps = (state) => {
  const { username, isLoggedIn } = state.auth;
  return { username, isLoggedIn };
};

export default connect(mapStateToProps)(NavbarComponent);


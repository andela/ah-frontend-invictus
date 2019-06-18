import React, { Component } from "react";
import SocialAuthentication from '../containers/SocialAuth';
import "../../assets/styles/signup.scss";
import '../../assets/styles/app.scss';
import { Link } from "react-router-dom";

class SignupFormComponent extends Component {
  render () {
    const {
      signupResponse,
      signupErrors,
      handleChange,
      handleSignup,
      timeMessage,
      isLoading
    } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="banner">
              <img className="banner-img"
                src={require("../../assets/images/ah_banner.png")}
                alt="Banner" />
            </div>
            {Object.keys(signupResponse).length > 0 ? (<div id="success" className="success">
              {timeMessage()}
              <p>Account was created. checkyour email to activate it.</p></div>) : ("")}
            <div className="card">
              <form id="signup-form"
                onSubmit={handleSignup}>
                <input
                  onChange={handleChange}
                  type="text"
                  id="username"
                  placeholder="username"
                  className="form-control input-field"
                />
                <p>{signupErrors.username ? (<span className="input-error" id="username_error">
                  {signupErrors.username}</span>) : ("")}</p>
                <input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  placeholder="email"
                  className="form-control input-field"
                />
                <p>{signupErrors.email ? (<span className="input-error" id="email_error">
                  {signupErrors.email}</span>) : ("")}</p>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  placeholder="password"
                  className="form-control input-field"
                />
                <p>{signupErrors.password ? (<span className="input-error"
                  id="password_error">{signupErrors.password}</span>) : ("")}</p>
                {isLoading ? (<button className="signup-btn"
                  type="submit" disabled>
                  <span className="spinner-border spinner-border-sm" />
                  Signing up..</button>) : (<button className="signup-btn"
                  type="submit">Signup</button>)}
                <div className="signupwith">
                  <img className="signupwith-img" alt="signup-with"
                    src={require("../../assets/images/signupwith.png")} />
                  <div className="row social-media-row">
                    <div className="col-md-1" />
                    <div className="col-md-10">
                      <SocialAuthentication />
                    </div>
                    <div className="col-md-1" />
                  </div>
                </div>
                <p className="have-an-account">Already have an account!
                  <Link to="/login">Login</Link></p>
              </form>
            </div></div>
          <div className="col-md-4" />
        </div>
      </React.Fragment>
    );
  }
}

export default SignupFormComponent;

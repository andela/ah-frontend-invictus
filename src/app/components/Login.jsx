import React from 'react';
import PropTypes from 'prop-types';
import SocialAuthentication from '../containers/SocialAuth';
import '../../assets/styles/login.scss';
import '../../assets/styles/app.scss';

const Login = (
  {
    handleSubmit,
    onChange,
    email,
    password,
    errors
  }
) => {
  return (
    <div className="row">
      <div className="col-sm-4" />
      <div className="col-sm-4">
        <div className="banner">
          <img className="banner-img"
            src={require("../../assets/images/ah_banner.png")}
            alt={"Banner"} />
        </div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Login Form</label>
              <input type="text" id="UserEmail" onChange={onChange} value={email || ''} name="email"
                className="form-control input-field" placeholder="Email" required />
              {
                errors.userEmail && (<div style={{ color: 'red' }}>{errors.userEmail}</div>)
              }
              <input type="password" onChange={onChange} value={password} name="password"
                className="form-control input-field" placeholder="Password" required />
              {
                errors.userPassword && (<div style={{ color: 'red' }}>{errors.userPassword}</div>)
              }
              <input type="submit" className="btn btn-primary login-btn" />
              <p className="have-account">Forgot password? <a href="/password/reset">Reset</a></p>
            </div>
            <div className="loginwith">
              <img className="loginwith-img" alt="login-with"
                src={require("../../assets/images/loginwith.png")} />
              <div className="row social-media-row">
                <div className="col-md-1" />
                <div className="col-md-10">
                  <SocialAuthentication />
                </div>
                <div className="col-md-1" />
              </div>
            </div>
            <p className="have-account">Not yet a member? <a href="/signup">Sign up</a></p>
          </form>
        </div>
      </div>
      <div className="col-sm-3" />
    </div>
  );
};
Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default Login;

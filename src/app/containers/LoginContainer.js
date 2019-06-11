import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../../redux/actions/LoginActions';
import Login from '../components/Login';
import { loginUtil } from './loginUtils';

export class LoginContainer extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  onChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  checkValidEmail = (userEmail) => {
    const mailFormat = loginUtil.LOGIN_UTILS;
    if (userEmail.match(mailFormat)) {
      return true;
    }
    return false;
  };

  checkPassword = (userPassword) => {
    if (userPassword === undefined) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };
    if (this.state.email === undefined) {
      this.setState({ errors: { userEmail: 'Email required' } });
    } else if (!this.checkValidEmail(this.state.email)) {
      this.setState({ errors: { userEmail: 'invalid email format' } });
    } else if (!this.checkPassword(this.state.password)) {
      this.setState({ errors: { userPassword: 'Password field is empty' } });
    } else {
      this.props.loginAction(userData, this.props);
    }
  }
  render () {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        email={this.state.email}
        password={this.state.password}
        errors={this.state.errors}
      />
    );
  }
}

LoginContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  loginAction: PropTypes.func,
  errors: PropTypes.object
};

LoginContainer.defaultProps = {
  errors: {},
  email: '',
  password: '',
  handleSubmit: () => { },
  onChange: () => { }
};
export const mapStateToProps = state => ({ login: state.auth });
export default connect(mapStateToProps, { loginAction })(LoginContainer);

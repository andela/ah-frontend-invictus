import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutAction } from '../../redux/actions/LoginActions';

export class LogoutContainer extends Component {
    componentWillMount = () => {
      localStorage.clear();
      this.props.logoutAction();
    }
    render () {
      return (
        <Redirect to="/login" />
      );
    }
}

export default connect(null, { logoutAction })(LogoutContainer);

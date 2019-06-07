import React, { Component } from 'react';
import { resetPasswordAction } from '../../../redux/actions/resetPasswordAction';
import PasswordResetForm from '../../components/PasswordResetForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { myComponentWillReceiveProps } from './util';
import { Redirect } from 'react-router-dom';

export class ResetPassword extends Component {
  constructor (props) {
    super(props);
    this.state = {
      password: "",
      password2: "",
      errors: [],
      token: "",
      message: "",
      form: "password",
      isDisplayMessage: false
    };
  }
  componentDidMount () {
    const { match: { params } } = this.props;
    this.setState({ token: params.token });
  }
  componentWillReceiveProps (nextProps) {
    this.setState(myComponentWillReceiveProps(nextProps));
  }
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = e => {
      e.preventDefault();
      const post = {
        token: this.state.token,
        password: this.state.password,
        confirm_password: this.state.password2
      };
      this.setState({
        isDisplayMessage: true,
        message: "Please wait .."
      });
      this.props.resetPasswordAction(post);
    }
    render () {
      return (
        this.state.message === "Password reset was successfull." ?
          <Redirect to="/login" /> :
          <PasswordResetForm
            props={{ onSubmit: this.onSubmit,
              onChange: this.onChange,
              state: this.state }} />
      );
    }
}
ResetPassword.propTypes = {
  message: PropTypes.string,
  errors: PropTypes.array,
  match: PropTypes.object,
  resetPasswordAction: PropTypes.func
};
const mapStateToProps = state => ({
  message: state.RequestResetPassword.message,
  errors: state.RequestResetPassword.errors
});
export default connect(mapStateToProps, { resetPasswordAction })(ResetPassword);

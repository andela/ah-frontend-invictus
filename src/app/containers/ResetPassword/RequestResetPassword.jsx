import React, { Component } from 'react';
import { resetPasswordRequestAction } from '../../../redux/actions/resetPasswordAction';
import PasswordResetForm from '../../components/PasswordResetForm';
import { connect } from 'react-redux';
import { APP_URLS } from '../../../utilities';
import { myComponentWillReceiveProps } from './util';

export class ResetPassword extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      errors: [],
      message: "",
      form: "email",
      isDisplayMessage: false
    };
  }
  componentWillReceiveProps (ReceivedProps) {
    this.setState(myComponentWillReceiveProps(ReceivedProps));
  }
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = e => {
      e.preventDefault();
      const post = {
        email: this.state.email,
        url: APP_URLS.FRONT_END + '/resetpassword/'
      };
      this.setState({
        isDisplayMessage: true,
        message: "Please wait .."
      });
      this.props.resetPasswordRequestAction(post);
    }
    render () {
      const props = {
        onSubmit: this.onSubmit,
        onChange: this.onChange,
        state: this.state
      };
      return (
        this.state.message === "Check your email-address for a reset-password link." ?
          this.state.message :
          <PasswordResetForm props={props} />
      );
    }
}
export const mapStateToProps = state => ({
  message: state.RequestResetPassword.message,
  errors: state.RequestResetPassword.errors
});
export default connect(mapStateToProps, { resetPasswordRequestAction })(ResetPassword);

import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUserAction } from "../../redux/actions/Signupactions";
import SignupFormComponent from "../components/Signup";
import NavbarComponent from "../components/Navbar";

export class SignupComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleSignup = event => {
    event.preventDefault();
    let form = document.getElementById("signup-form");
    const { username, email, password } = this.state;
    const signData = {
      username: username,
      email: email,
      password: password
    };
    if (form) {
      form.reset();
    }
    this.props.signupUserAction(signData);
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  timeMessage = () => {
    setTimeout(function () {
      let element = document.getElementById("success");
      if (element) {
        element.style.display = "none";
      }
    }, 10000);
  }
  render () {
    const { signupErrors, signupResponse, isLoading } = this.props;
    return (
      <div>
        <NavbarComponent />
        <SignupFormComponent
          signupResponse={signupResponse}
          signupErrors={signupErrors}
          handleChange={this.handleChange}
          handleSignup={this.handleSignup}
          timeMessage={this.timeMessage}
          isLoading={isLoading}
        />
      </div >
    );
  }
}

export const mapStateToProps = state => ({
  signupErrors: state.signup.signupErrors,
  signupResponse: state.signup.signupResponse,
  isLoading: state.signup.isLoading
});

export default connect(
  mapStateToProps,
  { signupUserAction }
)(SignupComponent);

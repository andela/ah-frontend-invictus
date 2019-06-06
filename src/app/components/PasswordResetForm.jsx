import React from 'react';
import Errors from '../containers/Errors';
import '../../assets/styles/resetpassword.scss';

const PasswordResetForm = (props) => {
  props = props.props;
  return (
    <div className="row">
      <div className="col-sm-3"/>
      <div className="col-sm-6">
        <div className="reset_pass">
          <Errors errors={props.state.errors} />
          {props.state.isDisplayMessage ? (
            <h6>{ props.state.message }</h6>) : (null)}
          <form onSubmit={props.onSubmit}>
            {props.state.form === "password" ? (
              <div className="form-group">
                <h5>Create Password</h5>
                <input type="password" onChange={props.onChange} value={props.state.password} name="password" className="form-control" placeholder="new password" />
                <input onChange={props.onChange} value={props.state.password2} name="password2" type="password" className="form-control" placeholder="confirm password" />
                <input className="form-control login-btn btn btn-primary" type="submit" />
              </div>) : (
              <div className="form-group">
                <h5>Enter Email</h5>
                <input type="email" value={props.state.email} placeholder="e-mail" onChange={props.onChange} name="email" className="form-control" />
                <input className="form-control login-btn btn btn-primary" type="submit" />
              </div>)}
          </form></div></div>
      <div className="col-sm-3"/></div>);
};
export default PasswordResetForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FacebookSocialAuth from 'react-facebook-login';
import GoogleSocialAuth from 'react-google-login';
import socialAuth from '../../redux/actions/socialAuth/socialAuthAction';
import '../../assets/styles/socialbuttons.scss';

export class SocialAuthentication extends Component {
  responseFacebook = (response) => {
    const { socialAuth } = this.props;
    socialAuth(response.accessToken, 'facebook');
  };

  googleResponse = (response) => {
    const { socialAuth } = this.props;
    const accessToken = socialAuth(response.tokenId, 'google');
    return accessToken;
  };

  render () {
    return (
      <div className="socialAuth">
        <FacebookSocialAuth
          appId="349961962392067"
          fields="name,email"
          callback={this.responseFacebook}
          textButton={false}
          cssClass="fa fa-facebook"
        />
        <GoogleSocialAuth
          clientId="45687926143-vk1re0t33ljt0f46pr63gifaluq8q0sn.apps.googleusercontent.com"
          render={renderProps => (
            <button className="fa fa-google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
            </button>
          )}
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse}
        />
      </div>
    );
  }
}

SocialAuthentication.propType = {
  responseFacebook: PropTypes.func,
  responseGoogle: PropTypes.func
};

export const mapStateToProps = state => ({
  socialAuthState: state.socialAuthReducer
});

export default connect(mapStateToProps, { socialAuth })(SocialAuthentication);

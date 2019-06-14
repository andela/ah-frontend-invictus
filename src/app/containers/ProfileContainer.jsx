import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfile } from '../../redux/actions/profileActions';
import ProfileComponent from '../components/ProfileComponent';


export class ProfileContainer extends Component {
  componentDidMount () {
    this.props.fetchProfile();
  }
  render () {
    return (
      <ProfileComponent state={this.props} />
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profileReducer,
  isLoading: state.profileReducer.isLoading
});

ProfileContainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchProfile })(ProfileContainer);

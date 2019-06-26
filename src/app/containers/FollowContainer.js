import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import followUser from '../../redux/actions/FollowingAction';
import FollowComponent from '../components/FollowComponent';


export class FollowContainer extends Component {
  componentDidMount () {
    const username = localStorage.getItem('username');
    const { followUser } = this.props;
    followUser(username);
  }


  render () {
    const { profiles } = this.props;
    return (
      <FollowComponent state={this.props} profiles={profiles} />
    );
  }
}

export const mapStateToProps = state => ({
  profiles: state.followUser,
  currentUser: state.auth.login_success.username,
  following: state.followUser
});

FollowContainer.propTypes = {
  followUser: PropTypes.func
};

export default connect(mapStateToProps, { followUser })(FollowContainer);

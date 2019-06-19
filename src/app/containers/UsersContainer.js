import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchUser from '../../redux/actions/FetchUsersAction';
import followUser from '../../redux/actions/FollowingAction';
import followUsers from '../../redux/actions/followAction';
import FetchUsers from '../components/FetchUsers';
import unfollowUsers from '../../redux/actions/UnfollowAction';


export class UsersContainer extends Component {
  componentWillMount () {
    this.props.fetchUser();
    const username = localStorage.getItem('username');
    const { followUser } = this.props;
    followUser(username);
  }

  followAGivenUser = (username) => {
    const { followUsers } = this.props;
    followUsers(username);
  }

  unfollowAGivenUser = (username) => {
    const { unfollowUsers } = this.props;
    unfollowUsers(username);
  }
  render () {
    const { profiles } = this.props;
    return (
      <FetchUsers state={this.props} profiles={profiles}/>
    );
  }
}

export const mapStateToProps = state => ({
  profiles: state.fetchUser,
  currentUser: state.auth.login_success.username,
  following: state.followUser,
  followings: state.followUsers,
  unfollowing: state.unfollowUsers
});

UsersContainer.propTypes = {
  fetchUser: PropTypes.func,
  followAGivenUser: PropTypes.func,
  unfollowAGivenUser: PropTypes.func
};

export default connect(mapStateToProps, { fetchUser, followUser, followUsers, unfollowUsers })(UsersContainer);

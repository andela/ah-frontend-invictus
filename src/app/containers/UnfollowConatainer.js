import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import unfollowUsers from '../../redux/actions/UnfollowAction';
import FetchUsers from '../components/FetchUsers';


export class UnFollowContainer extends Component {
  unfollowAGivenUser = (username) => {
    const { unfollowUsers } = this.props;
    unfollowUsers(username);
  }


  render () {
    const { profiles } = this.props;
    return (
      <FetchUsers state={this.props} profiles={profiles} unfollowAGivenUser={this.unfollowAGivenUser} />
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.unfollowUsers,
  currentUser: state.auth.login_success.username,
  unfollowing: state.unfollowUsers
});

UnFollowContainer.propTypes = {
  unfollowUser: PropTypes.func
};

export default connect(mapStateToProps, { unfollowUsers })(UnFollowContainer);

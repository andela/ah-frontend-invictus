import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import followUsers from '../../redux/actions/followAction';
import FetchUsers from '../components/FetchUsers';


export class FollowUserContainer extends Component {
  followAGivenUser = (username) => {
    const { followUsers } = this.props;
    followUsers(username);
  }


  render () {
    const { profiles } = this.props;
    return (
      <FetchUsers state={this.props} profiles={profiles} followAGivenUser={this.followAGivenUser} />
    );
  }
}

export const mapStateToProps = state => ({
  profiles: state.followUsers,
  currentUser: state.auth.login_success.username,
  following: state.followUsers
});

FollowUserContainer.propTypes = {
  followUser: PropTypes.func,
  followAGivenUser: PropTypes.func
};

export default connect(mapStateToProps, { followUsers })(FollowUserContainer);

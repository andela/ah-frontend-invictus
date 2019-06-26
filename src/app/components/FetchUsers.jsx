import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const FetchUsers = (props) => {
  const isFollowing = (obj) => {
    let list = props.state.following.profiles;
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].user === obj.user) {
        return true;
      }
    } return false;
  };
  const allUsers = props.state.profiles.profiles.map(profile => (<p key={profile.user} className="card-article-link" to={`/users/${profile.user}`}>
    <div className="card-article" style={{ width: 21.85 + 'rem' }}><div className="card-body">
      <div><p className="card-publish-date"><b>Updated At: </b>{profile.updated_at.substring(0, 10)}</p></div> <p className="card-text"><b>Bio:</b> {profile.bio}</p><p className="card-footer-text"><b>FirstName:</b> {profile.firstname}</p>
      <p className="card-footer-text"><b>LastName:</b> {profile.lastname}</p><p className="card-footer-text"><b>UserName:</b> {profile.user}</p>
      <div className="card-body-footer">
        {isFollowing(profile) ? (<a href="#"><button type="button" className="btn btn-outline-success" onClick={() => { let username = profile.user; props.state.unfollowUsers(username); }}>UnFollow</button></a>) : (<a href="#"><button type="button" className="btn btn-outline-success"
          onClick={() => { let username = profile.user; props.state.followUsers(username); }}>Follow</button></a>)}<div className="all-tags"><hr />
        </div></div></div></div>
  </p>
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="articles-heading">All User Profiles</h2><hr />
        <div className="row">{allUsers}</div>
      </div>
    </div>
  );
};

FetchUsers.propTypes = {
  unfollowUsers: PropTypes.func,
  followUsers: PropTypes.func
};
export default FetchUsers;


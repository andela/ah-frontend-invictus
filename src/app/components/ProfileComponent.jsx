import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/userprofile.scss';
import ProfileArticleComponent from './ProfileArticleComponent';
import NavbarComponent from '../components/Navbar';
import { SpinnerComponent } from './SpinnerComponent';


const ProfileComponent = (props) => {
  const { username, image } = props.state.profile.profile;
  const { isLoading } = props.state;
  return (
    <div className="user-profile-container">
      <div className="row">
        <div className="col-md-12"><NavbarComponent /></div></div>
      {isLoading === true ? (<SpinnerComponent />) : (<div className="row">
        <div className="col-md-1 " /><div className="col-md-5  thepro">
          <div className="image-div" >
            {image === "" ? (<img className="profile-image" alt="profileimage"
              src={require("../../assets/images/avatar2.png")} />) :
              (<img className="profile-image" alt="profileimage" src={image} />)}
          </div>
        </div>
        <div className="col-md-5 user-info">
          <div className="user-details">
            <h2 className="mb-4 username">{`${username}`}</h2>
            <p className=" mb-3 mt-4">
              <span className="mr-3 ml-5 font-weight-bold">4789</span>
              <span className="text-muted">Followers</span>
              <span className=" ml-5 mr-3 font-weight-bold">2134</span>
              <span className="text-muted">Following</span></p>
            <Link to="/editprofile" className="edit-button">
              <FontAwesomeIcon icon={faEdit} />Edit Profile</Link>
          </div>
        </div>
        <div className="col-md-1" />
        <ProfileArticleComponent /></div>)}
    </div>
  );
};

export default ProfileComponent;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase/config';
import { editProfile } from '../../redux/actions/profileActions';
import '../../assets/styles/userprofile.scss';
import NavbarComponent from '../components/Navbar';

export class EditProfileContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
      image: "",
      progress: 0,
      uploadDone: false
    };
  }

  componentWillMount () {
    const { firstname, lastname, bio, image } = this.props.profile.profile;
    this.setState({ firstname, lastname, bio, image });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.editSuccess === true) {
      const { history } = nextProps;
      history.push('/profile');
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, bio, image } = this.state;
    const newProfile = {
      firstname: firstname,
      lastname: lastname,
      bio: bio,
      image: image
    };
    this.props.editProfile(newProfile, this.props);
  }

  /* istanbul ignore next */
  uploadImage (files) {
    const fileload = firebase
      .storage()
      .ref(`images/${files[0].name}`)
      .put(files[0]);

    fileload.then(res => {
      firebase
        .storage()
        .ref(`images/${files[0].name}`)
        .getDownloadURL()
        .then(url => {
          const image = {
            image: url
          };
          this.props.editProfile(image);
        });
    });
    fileload.on("state_changed", snapshot => {
      const uploadDone = true;
      this.setState({ uploadDone });
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      this.setState({ progress });
    });
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-12"><NavbarComponent /></div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="image-div" >
              {this.state.image === "" ? (<img alt="profileimage" className="profile-image"
                src={require("../../assets/images/avatar2.png")} />) :
                (<img className="profile-image" alt="profileimage" src={this.state.image} />)}
              <progress value={this.state.progress} max="100" />
              <input
                type="file"
                onChange={event => this.uploadImage(event.target.files)}
                className="upload-button mt-3"
                id="profile"
              />
            </div>
            <form onSubmit={this.onSubmit}>
              <div>
                <div className="form-group">
                  <label className="">firstname</label>
                  <input type="text" name="firstname"
                    onChange={this.onChange} className="form-control"
                    defaultValue={this.state.firstname} />
                </div>
                <div className="form-group">
                  <label className="">Lastname</label>
                  <input type="text" name="lastname" className="form-control"
                    onChange={this.onChange}
                    defaultValue={this.state.lastname} />
                </div>
                <div className="form-group">
                  <label className="">Bio</label>
                  <textarea className="form-control" name="bio" id="exampleFormControlTextarea1"
                    rows="3" onChange={this.onChange} value={this.state.bio} />
                </div>
              </div>
              <div><button className="button" type="submit">Save Changes</button></div>
            </form>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  profile: state.profileReducer,
  editSuccess: state.profileReducer.editSuccess
});

export default connect(mapStateToProps, { editProfile })(EditProfileContainer);

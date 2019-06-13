import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/login.scss';


const Comment = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-5" />
        <form onSubmit={handleSubmit}>
          <label>Comment</label>
          <textarea id="CommentBody" onChange={handleChange}
            className="form-control input-field" name="commentBody"
            placeholder="Enter your Comments" />
          <input type="submit" className="btn btn-primary login-btn" />
        </form>
      </div>
    </div>
  );
};

Comment.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default Comment;

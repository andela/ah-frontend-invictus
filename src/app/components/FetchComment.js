import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/login.scss';
import '../../assets/styles/fetchcomment.scss';

const FetchComment = ({ comments }) => {
  return (
    <>
      <div className="row content">
        <div className="col-md-12">
          {
            comments.map(comment => {
              return (
                <div className="input-field" >
                  {comment.body}
                  <br />
                  {comment.created_at}
                  <br />
                  {comment.author}
                </div>
              );
            })
          }

        </div>
      </div>
    </>
  );
};

FetchComment.propTypes = {
  comment: PropTypes.string,
  comments: PropTypes.array
};

FetchComment.defaultProps = {
  comments: []
};

export default FetchComment;

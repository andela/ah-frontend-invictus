import React from 'react';

export default function DeleteArticleComponent (props) {
  return (
    <div >
      <button className="btn btn-outline-danger"
        onClick={props.handleDelete}>Delete</button>
    </div>
  );
}

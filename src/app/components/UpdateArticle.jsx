import React, { Component } from 'react';
import '../../assets/styles/updatearticle.scss';

class UpdateArticleComponent extends Component {
  render () {
    const { handleChange, handleSubmit, updateArticleErrors } = this.props;
    const { title, body, description } = this.props.localState;
    return (
      <>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8" >
            <div className="card article-card">
              <center><h5 className="edit-mode">Edit Mode</h5></center>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <textarea id="title"
                    className="title-input"
                    onChange={handleChange}
                    placeholder="Title"
                    value={title}
                  />
                  <p className="error-display">
                    {updateArticleErrors.errors ? (updateArticleErrors.errors.title) :
                      ("")}</p>
                </div>
                <div>
                  <img className="card-image" alt="" src="https://picsum.photos/600/300" />
                </div>
                <div className="form-group">
                  <textarea id="description"
                    className="description-input"
                    onChange={handleChange}
                    placeholder="Description"
                    value={description}
                  />
                  <p className="error-display">
                    {updateArticleErrors.errors ? (updateArticleErrors.errors.description) :
                      ("")}</p>
                </div>
                <div className="form-group">

                  <textarea id="body"
                    className="body-input"
                    onChange={handleChange}
                    placeholder="Body"
                    value={body}
                  />
                  <p className="error-display">
                    {updateArticleErrors.errors ? (updateArticleErrors.errors.body) :
                      ("")}</p>
                </div>
                <button className="postarticle-btn">Update</button>
              </form>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </>
    );
  }
}

export default UpdateArticleComponent;

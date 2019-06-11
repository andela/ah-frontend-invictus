import React from 'react';
import '../../assets/styles/article.scss';

const ArticlePresentationComponent = ({ handleSubmit, handleChange }) => {
  return (
    <>
      <div className="create-article">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="sr-only">Title</label>
                  <textarea
                    className="title-input"
                    type="text"
                    name="title"
                    id="title-input"
                    placeholder="Title"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="description-input"
                    type="text"
                    name="description"
                    id="description-input"
                    placeholder="Description"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="body-input"
                    type="text"
                    name="body"
                    id="body-input"
                    placeholder="Body"
                    required
                    onChange={e => handleChange(e)}
                  />
                </div>
                <button type="submit" className="btn postarticle-btn btn-outline-primary">Post Article</button>
              </form>
            </div>

          </div>
          <div className="col-md-2" />
        </div>
      </div>

    </>
  );
};

export default ArticlePresentationComponent;

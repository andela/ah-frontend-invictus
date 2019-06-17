import React from 'react';
import Navbar from '../../components/Navbar';
import CommentContainer from '../../containers/CommentContainer';

const ArticleComponent = (props) => {
  const { articleId, article: { title, body, author, description, tagList = [] }, handleLike, handleDislike } = props;
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="article-main">
          <h1 className="article-title">{title}</h1>
          <div className="article-desc">{description}</div>
          <div>{author}</div>
          <img className="card-image" alt="" src="https://picsum.photos/600/300" />
          <div className="article-body">{body}</div>
          <div className="like-dislike">
            <i className="fa fa-thumbs-up" onClick={handleLike} role="presentation"
              style={{ color: 'blue', marginRight: '10px' }} />
            <i
              className="fa fa-thumbs-down" onClick={handleDislike} role="presentation" style={{ color: 'red' }}
            /></div>
          <div className="all-tags"><hr />
            <ul>{tagList.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul>
            <div>
              <CommentContainer articleId={articleId} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default ArticleComponent;

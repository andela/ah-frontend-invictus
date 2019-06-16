import React from 'react';
import Navbar from '../../components/Navbar';

const ArticleComponent = (props) => {
  const { article: { title, body, author, description } } = props;

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
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;

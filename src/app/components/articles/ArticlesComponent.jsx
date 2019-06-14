import React from 'react';
import { Link } from "react-router-dom";
import '../../../assets/styles/articles.scss';

const ArticlesComponent = (props) => {
  const articlesItems = props.state.articles.articles.map(article => (
    <Link key={article.id} className="card-article-link" to={`/articles/${article.id}`}>
      <div className="card-article" style={{ width: 21.85 + 'rem' }}>
        <img className="card-image" alt="" src="https://picsum.photos/600/350" />
        <div className="card-body">
          <div><p className="card-publish-date">Published On: {article.created_at.substring(0, 10)}</p></div>
          <h4 className="card-title">{article.title}</h4><p className="card-text">{article.description}</p>
          <div className="card-body-footer">
            <p className="card-footer-text">@{article.author}</p>
            <p className="card-footer-text">{article.read_time}</p></div>
          <div className="card-body-likes-dislikes">
            <p className="card-body-likes-text">Likes: {' '}{article.likes_count}</p>
            <p className="card-body-dislikes-text">Dislikes: {' '}{article.dislikes_count}</p></div>
          <div className="all-tags"><hr />
            <ul>{article.tagList.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul></div>
        </div></div>
    </Link>));
  return (
    <div>
      <div className="container">
        <h2 className="articles-heading">Recent Articles</h2><hr />
        <div className="row">{articlesItems}</div>
      </div>
    </div>
  );
};

export default ArticlesComponent;

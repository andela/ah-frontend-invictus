import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RateArticle from '../../containers/RateArticle';
import Pagination from '../Pagination';
import '../../../assets/styles/articles.scss';

class ArticlesComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      allArticles: [],
      currentArticles: [],
      currentPage: null,
      totalPages: null
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ allArticles: nextProps.state.articles.articles });
  }


  onPageChanged = data => {
    const { allArticles } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentArticles = allArticles.slice(offset, offset + pageLimit);

    this.setState({ currentPage: currentPage, currentArticles: currentArticles, totalPages: totalPages });
  }


  render () {
    const { allArticles, currentArticles, currentPage, totalPages } = this.state;
    const totalArticles = allArticles.length;

    if (totalArticles === 0) return null;

    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    const displayArticlesList = () => {
      return currentArticles.map(article => (
        <Link key={article.id} className="card-article-link" to={`/articles/${article.id}`}>
          <div className="card-article" style={{ width: 21.85 + 'rem' }}>
            <img className="card-image" alt="" src="https://picsum.photos/600/350" />
            <div className="card-body">
              <div>
                <p className="card-publish-date">Published On: {article.created_at.substring(0, 10)}</p>
              </div>
              <h4 className="card-title">{article.title}</h4>
              <RateArticle articleId={article.id} />
              <p className="card-text">{article.description}</p>
              <div className="card-body-footer">
                <p className="card-footer-text">@{article.author}</p>
                <p className="card-footer-text">{article.read_time}</p>
              </div>
              <div className="card-body-likes-dislikes">
                <p className="card-body-likes-text">Likes: {' '}{article.likes_count}</p>
                <p className="card-body-dislikes-text">Dislikes: {' '}{article.dislikes_count}</p>
              </div>
              <div className="all-tags"><hr />
                <ul>{article.tagList.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul>
              </div>
            </div>
          </div>
        </Link>)
      );
    };

    return ( 
      <div>
        {/* // Start pagination */}
        <div className="container">
          <div className="row">
            <div className="w-100 px-4 py-4 d-flex flex-row flex-wrap align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <h4 className={headerClass}>
                  <strong className="text-secondary">{totalArticles}</strong> Articles
                </h4>
                { currentPage && (
                  <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                  </span>
                ) }
              </div>
              <Pagination totalRecords={totalArticles} pageLimit={9} pageNeighbours={2} onPageChanged={this.onPageChanged} />
            </div>
          </div>
        </div>
        {/* // End pagination */}
        <div className="container">
          <h2 className="articles-heading">Recent Articles</h2><hr />
          <div className="row">
            { displayArticlesList() }
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesComponent;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GetArticleComponent from '../../../app/components/articles/getArticleComponent';
import fetchArticle from '../../../redux/actions/articles/ArticleActions';
import { likeArticle, dislikeArticle, bookmarkArticle } from '../../../redux/actions/ArticleActions';

export class Article extends Component {
  componentWillMount () {
    const articleId = this.props.match.params.id;
    this.props.fetchArticle(articleId);
  }

  handleLike = () => {
    const articleId = this.props.match.params.id;
    this.props.likeArticle(articleId, this.props);
  };

  handleDislike = () => {
    const articleId = this.props.match.params.id;
    this.props.dislikeArticle(articleId, this.props);
  };

  handleBookmark = () => {
    const articleId = this.props.match.params.id;
    this.props.bookmarkArticle(articleId, this.props);
  };

  render () {
    const articleId = this.props.match.params.id;
    return (
      <div>
        <GetArticleComponent articleId={articleId} {...this.props.article}
          handleLike={this.handleLike}
          handleDislike={this.handleDislike}
          auth={this.props.auth}
          handleBookmark={this.handleBookmark}
        />
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth.login_success
});

Article.propTypes = {
  fetchArticle: PropTypes.func,
  handleLike: PropTypes.func,
  handleDislike: PropTypes.func,
  likeArticle: PropTypes.func,
  dislikeArticle: PropTypes.func,
  handleBookmark: PropTypes.func,
  bookmarkArticle: PropTypes.func
};

export default connect(mapStateToProps, { fetchArticle, likeArticle, dislikeArticle, bookmarkArticle })(Article);

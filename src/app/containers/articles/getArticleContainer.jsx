import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GetArticleComponent from '../../../app/components/articles/getArticleComponent';
import fetchArticle from '../../../redux/actions/articles/ArticleActions';
import { likeArticle, dislikeArticle } from '../../../redux/actions/ArticleActions';

export class Article extends Component {
  componentDidMount () {
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

  render () {
    return (
      <div>
        <GetArticleComponent {...this.props.article}
          handleLike={this.handleLike}
          handleDislike={this.handleDislike}
        />
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  article: state.article
});

Article.propTypes = {
  fetchArticle: PropTypes.func,
  handleLike: PropTypes.func,
  handleDislike: PropTypes.func,
  likeArticle: PropTypes.func,
  dislikeArticle: PropTypes.func
};

export default connect(mapStateToProps, { fetchArticle, likeArticle, dislikeArticle })(Article);

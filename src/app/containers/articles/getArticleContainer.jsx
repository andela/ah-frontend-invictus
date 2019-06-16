import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GetArticleComponent from '../../../app/components/articles/getArticleComponent';
import fetchArticle from '../../../redux/actions/articles/ArticleActions';

export class Article extends Component {
  componentDidMount () {
    const articleId = this.props.match.params.id;
    this.props.fetchArticle(articleId);
  }

  render () {
    return (
      <div>
        <GetArticleComponent {...this.props.article} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.article
});

Article.propTypes = {
  fetchArticle: PropTypes.func
};

export default connect(mapStateToProps, { fetchArticle })(Article);

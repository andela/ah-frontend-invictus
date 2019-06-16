import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticlesComponent from '../../../app/components/articles/ArticlesComponent';
import fetchArticles from '../../../redux/actions/articles/ArticlesActions';

export class Articles extends Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    return (
      <div>
        <ArticlesComponent state={this.props} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.articles
});

Articles.propTypes = {
  fetchArticles: PropTypes.func
};

export default connect(mapStateToProps, { fetchArticles })(Articles);

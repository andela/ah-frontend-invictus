import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import ArticlePresentationComponent from '../components/ArticleComponent';
import { postArticle } from '../../redux/actions/ArticleActions';
import { articleUrl } from '../utils';
import PropTypes from 'prop-types';


export class ArticleContainer extends Component {
  state = {
    title: "",
    description: "",
    body: "",
    tagList: []
  };


  checkBlank = () => {
    const { title, body, description } = this.state;
    if (title === '' || body === '' || description === '') {
      toast.dismiss();
      toast.error("All fields must be filled", {
        hideProgressBar: false,
        autoClose: 3000
      });
    }
  };

  handleAddTag = (tag) => {
    this.setState(state => ({ tagList: [...state.tagList, tag] }));
  }

  handleDeleteTag = (i) => {
    const { tagList } = this.state;
    this.setState({
      tagList: tagList.filter((tag, index) => index !== i)
    });
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body, description, tagList } = this.state;
    let newTags = [];
    tagList.map(tag => newTags.push(tag.text));
    const articleDetails = { title, body, description, tagList: newTags };
    this.checkBlank();
    var headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = `Bearer ${localStorage.getItem('user_token')}`;
    this.props.postArticle(articleUrl, articleDetails, headers, this.props);
  };

  render () {
    return (

      <ArticlePresentationComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleAddTag={this.handleAddTag}
        handleDeleteTag={this.handleDeleteTag}
        tags={this.state.tagList}
      />
    );
  }
}

ArticleContainer.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  checkBlank: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  description: PropTypes.string
};

export default connect(null, { postArticle })(ArticleContainer);

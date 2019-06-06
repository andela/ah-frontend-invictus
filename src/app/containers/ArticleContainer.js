import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import ArticlePresentationComponent from '../components/ArticleComponent';
import { postArticle } from '../../redux/actions/ArticleActions';
import { articleUrl } from '../utils';

export class ArticleContainer extends Component {
  state = {
    title: "",
    description: "",
    body: "",
    tagList: ["tags"]
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body, description, tagList } = this.state;
    const articleDetails = { title, body, description, tagList };
    this.checkBlank();
    var headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = `Bearer ${localStorage.getItem('user_token')}`;
    this.props.postArticle(articleUrl, articleDetails, headers);
  };

  render () {
    return (

      <ArticlePresentationComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default connect(null, { postArticle })(ArticleContainer);

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateArticleAction } from '../../redux/actions/UpdateArticle';
import UpdateArticleComponent from '../components/UpdateArticle';
import NavbarComponent from '../components/Navbar';

export class UpdateArticleContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: "",
      tagList: []
    };
  }

  componentWillMount () {
    const { body, title, description, tagList } = this.props.article.article;
    this.setState({ body, title, description, tagList });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, body, tagList } = this.state;
    const articleData = {
      title: title,
      description: description,
      body: body,
      tagList: tagList
    };
    const id = this.props.article.article.id;
    this.props.updateArticleAction(id, articleData);
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }
  render () {
    return (
      <>
        <NavbarComponent />
        <UpdateArticleComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          updateArticleErrors={this.props.updateArticleErrors}
          localState={this.state}
        />
      </>
    );
  }
}

export const mapStateToProps = state => ({
  updateArticleErrors: state.updateArticle.updateArticleErrors,
  updateArticleResponse: state.updateArticle.updateArticleResponse,
  article: state.article
});

export default connect(
  mapStateToProps,
  { updateArticleAction }
)(UpdateArticleContainer);

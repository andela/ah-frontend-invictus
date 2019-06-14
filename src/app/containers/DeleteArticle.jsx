import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticleAction } from '../../redux/actions/DeleteArticle';
import DeleteArticleComponent from '../components/DeleteArticle';

export class DeleteArticleContainer extends Component {
  handleDelete = event => {
    /* eslint-disable no-alert*/
    const delArticle = window.confirm("Are you sure you want to delete this article");
    if (delArticle === true) {
      this.props.deleteArticleAction(this.props.id);
    }
  }
  render () {
    return (
      <>
        < DeleteArticleComponent
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export const mapStateToProps = state => ({
  deleteArticleErrors: state.deleteArticle.deleteArticleErrors,
  deleteArticleResponse: state.deleteArticle.deleteArticleResponse
});

export default connect(
  mapStateToProps,
  { deleteArticleAction }
)(DeleteArticleContainer);

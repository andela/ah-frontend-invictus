import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchKeyword } from '../../redux/actions/searchActions';
import SearchComponent from '../components/SearchComponent';
import { APP_URLS } from '../../utilities';

export class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: "",
      filter: "",
      data: []
    };
  }

  componentWillReceiveProps = newProps => {
    this.setState({
      data: newProps.Data
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    let url;
    switch (this.state.filter) {
    case 'author':
      url = `${APP_URLS.BACK_END}api/articles/all/?author=${this.state.search}`;
      break;
    case 'title':
      url = `${APP_URLS.BACK_END}api/articles/all/?title=${this.state.search}`;
      break;
    case 'tag':
      url = `${APP_URLS.BACK_END}api/articles/all/?tag=${this.state.search}`;
      break;
    default:
      url = `${APP_URLS.BACK_END}api/articles/all/?search=${this.state.search}`;
    }
    this.props.searchKeyword(url);
  }


  render () {
    return (
      <SearchComponent
        data={this.state.data}
        handleSearch={this.handleSearch}
        handleChange={this.handleChange}
        search={this.state.search}
        filter={this.state.filter}
      />
    );
  }
}

export const mapStateToProps = state => ({
  Data: state.search.Data
});

export default connect(mapStateToProps, { searchKeyword })(Search);

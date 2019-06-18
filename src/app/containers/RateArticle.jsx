import React, { Component } from 'react';
import axios from 'axios';
import { rateArticleAction } from '../../redux/actions/RateArticleAction';
import { connect } from 'react-redux';
import { APP_URLS } from '../../utilities';
import '../../assets/styles/rateArticle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { handleErrors } from '../containers/rateArticleUtil';


export const Repeat = props => {
  let items = [];

  for (let i = 0; i < 5; i++) {
    let color;
    if ((i + 1) <= props.rating) {
      color = 'green';
    }
    items.push(props.children((i + 1), color));
  }

  return items;
};

export class RateArticle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      articleId: 0,
      AvgRating: 0
    };
  }
  componentWillMount = () => {
    if (this.props.articleId) {
      let headers = {};
      headers['Content-Type'] = 'application/json';
      headers['Authorization'] = `Bearer ${localStorage.getItem('user_token')}`;

      return axios.get(`${
        APP_URLS.BACK_END
      }api/articles/${ this.props.articleId }/ratings/`, { headers })
        .then(resp => {
          this.setState({ AvgRating: resp.data.average_rating });
        })
        .catch(e => handleErrors(e));
    }
  }
  componentWillReceiveProps (nextProps) {
    this.componentWillMount();
  }
    onClick = value => {
      const post = {
        rating: value
      };
      this.props.rateArticleAction(post, this.props.articleId);
    }
    render () {
      return (
        <span className="fa-star">
          <Repeat rating={this.state.AvgRating}>
            {(index, color) => <FontAwesomeIcon key={index} onClick={() => this.onClick(index)} icon={faStar} color={color} /> }
          </Repeat>
          <button onClick={this.onChange} >Avg: {this.state.AvgRating}</button>
        </span>
      );
    }
}

export const mapStateToProps = state => ({
  changed: state.rateAticle.changed,
  message: state.rateAticle.message
});

export default connect(mapStateToProps, { rateArticleAction })(RateArticle);

import React from 'react';
import axios from 'axios';
import { shallow, render } from 'enzyme';
import { RateArticle, Repeat, mapStateToProps } from '../../containers/RateArticle';

jest.mock('axios');

describe('<RateArticle />', () => {
  const props = {
    articleId: 0,
    AvgRating: 0,
    rateArticleAction: jest.fn()
  };
  render(<RateArticle />);
  const wrapper = shallow(<RateArticle {...props} />);

  it('componentWillReceiveProps should update state', () => {
    wrapper.instance().onClick(1);
    wrapper.instance().componentWillMount();
    wrapper.instance().componentWillReceiveProps();
    wrapper.instance().componentWillReceiveProps({});
    expect(wrapper.instance().state.AvgRating).toEqual(0);
  });

  it('Test componentWillMount', () => {
    let wrapperr;
    axios.get.mockResolvedValue({
      response: undefined
        });
    props.articleId = 6;
    wrapperr = shallow(<RateArticle {...props} />);
    wrapperr.instance().componentWillMount();
  });

  });

  it('component should display rating', () => {
    expect(Repeat({ rating: 6,
      children: (a, b) => b })).toEqual(["green", "green", "green", "green", "green"]);
      expect(Repeat({ rating: 0,
        children: (a, b) => b  })).toEqual([undefined, undefined, undefined, undefined, undefined,]);
  });

  it('Test mapStateToProps', () => {
    expect(mapStateToProps({
        rateAticle: {
          changed: 'changed',
          message: 'message'
        }
    })).toEqual({
      changed: 'changed',
      message: 'message'
    });
  });

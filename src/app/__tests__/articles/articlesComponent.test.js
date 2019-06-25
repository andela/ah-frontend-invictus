import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import ArticlesComponent from '../../components/articles/ArticlesComponent';

const props = {
  state: {
    articles: {
      articles: [{
        id: 1,
        created_at: 'Test',
        title: 'Test',
        description: 'Test',
        author: 'Test',
        tagList:["edna"],
        read_time: 'Test'
      }]
    }
  }
};

describe('articles component', () => {
  let wrapper = shallow(<ArticlesComponent {...props} />);

  it('matches snapshot', () => {
    wrapper.instance().componentWillReceiveProps(props);
    wrapper.instance().onPageChanged({ 
      currentPage: 1, 
      totalPages: 2, 
      pageLimit: 2 
    });
    expect(toJson(wrapper.instance())).toMatchSnapshot();
  });
});

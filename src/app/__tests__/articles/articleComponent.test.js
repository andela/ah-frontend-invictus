import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ArticleComponent from '../../components/articles/getArticleComponent';

const props = {
  article: {
    title: 'Example Title',
    body: 'Some text',
    author: 'Test',
    description: 'Test'
  },
  auth: {
    username: "sanya"
  }
};

describe('article component', () => {
  let wrapper = shallow(<ArticleComponent {...props} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('article component again', () => {
  props.article.id = 5;
  props.article.tagList = ['edna'];
  let wrapper = shallow(<ArticleComponent {...props} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

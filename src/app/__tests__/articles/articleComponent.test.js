import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ArticleComponent from '../../components/articles/getArticleComponent';

const props = {
  article: {
    title: 'Example Title',
    body: 'Some text',
    author: 'Test',
    tagList:["edna"],
    description: 'Test'
  }
};

describe('article component', () => {
  let wrapper = shallow(<ArticleComponent {...props} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

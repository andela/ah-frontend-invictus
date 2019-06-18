import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ShareArticle, { socialRedirect } from '../components/ShareArticle';

const props = {
  title: "title",
  description: "description",
  social_links: {
    facebook: 'url',
    twitter: 'url',
    email: 'url'
  }};

describe('article component', () => {
  let wrapper = shallow(<ShareArticle {...props} />);
  socialRedirect('url');

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

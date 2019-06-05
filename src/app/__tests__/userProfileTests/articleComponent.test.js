import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ArticleComponent from '../../components/ProfileArticleComponent';

describe('<ArticleComponent />', () => {
  let wrapper;
  it('it renders articles without crashing', () => {
    wrapper = shallow(<ArticleComponent />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

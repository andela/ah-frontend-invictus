import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Comment from '../../components/Comment';

describe('<Comment />', () => {
  let wrapper;
  it('it fetches comments without crashing', () => {
    wrapper = shallow(<Comment />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

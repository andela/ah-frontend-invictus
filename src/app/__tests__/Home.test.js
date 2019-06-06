import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Home from '../../app/containers/Home';

describe('<Home />', () => {
  let wrapper;
  it('renders home page', () => {
    wrapper = shallow(<Home />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

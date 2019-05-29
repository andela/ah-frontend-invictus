import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('<Login />', () => {
  let wrapper;
  it('renders Login page', () => {
    const message = <h5>Authors Haven Login</h5>;
    wrapper = shallow(<Login />);
    expect(wrapper.contains(message)).toBe(true);
    expect(wrapper.contains(message)).toEqual(true);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from "enzyme";
import NavbarComponent from "../components/Navbar";
import toJson from 'enzyme-to-json';

describe('<NavbarComponent/>', () => {
  let wrapper;
  it('renders navbar component', () => {
    wrapper = shallow(<NavbarComponent />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


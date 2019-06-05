import React from 'react';
import { shallow } from "enzyme";
import {NavbarComponent, mapStateToProps } from "../components/Navbar";
import toJson from 'enzyme-to-json';

describe('<NavbarComponent/>', () => {
  const props = {
  
        isLoggedIn: false, username:""
  };
  let wrapper;
  it('renders navbar component', () => {
    wrapper = shallow(<NavbarComponent {...props} />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it ('should map state to props', ()=>{
    const mockState = {auth:{
      username:'edna',
      isLoggedIn: true
    }};
    const state = mapStateToProps(mockState)
    expect(state.username).toEqual('edna')
    expect(state.isLoggedIn).toEqual(true)
  });
});


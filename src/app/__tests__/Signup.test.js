import React from 'react';
import { shallow } from "enzyme";
import SignupFormComponent from "../components/Signup";
import toJson from 'enzyme-to-json';

describe('<SignupFormComponent/>', () => {
  let wrapper;
  const PropsTest = {
    signupResponse: {},
    signupErrors: {},
    handleChange: jest.fn(),
    handleSignup: jest.fn(),
    timeMessage: jest.fn(),
    isLoading: false,
    state: {
      signup: {
        signupErrors: {},
        signupResponse: {}
      }
    }
  };
  it('renders signup page', () => {
    wrapper = shallow(<SignupFormComponent {...PropsTest} />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


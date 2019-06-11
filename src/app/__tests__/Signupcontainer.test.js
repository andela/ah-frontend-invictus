import React from 'react';
import { shallow } from "enzyme";
import { SignupComponent, mapStateToProps } from "../containers/Signup";

describe('<SignupComponent/>', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<SignupComponent {...props} />);
  });
  it("should render SignupComponent without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should test the handleChange event", () => {
    const event = {
      target: {
        id: "username",
        value: "sanya"
      }
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().state.username).toBe("sanya");
  });
  it("should handle signUp event", () => {
    const props = {
      signupUserAction: jest.fn()
    };
    let wrapper = shallow(<SignupComponent {...props} />);
    const instance = wrapper.instance();
    instance.handleSignup({ preventDefault: jest.fn() });
    expect(props.signupUserAction).toHaveBeenCalled();
  });
  it("should map state to props", () => {
    const initialState = {
      signup: {
        signupErrors: {},
        signupResponse: {
        },
        isLoading: false
      }
    };
    expect(mapStateToProps(initialState)).toEqual({
      signupErrors: {},
      signupResponse: {
      },
      isLoading: false
    });
  });
  it("should call the time message method", () => {
    const props = {
      timeMessage: jest.fn(),
      reset: jest.fn(),
      setTimeout: jest.fn()
    };
    let wrapper = shallow(<SignupComponent {...props} />);
    wrapper.instance().timeMessage();
  });
});

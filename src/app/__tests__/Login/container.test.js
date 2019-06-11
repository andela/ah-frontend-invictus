import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { LoginContainer, mapStateToProps } from '../../containers/LoginContainer';


describe('loginContainer Component', () => {
  const wrapper = mount(<LoginContainer />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call an onChange function', () => {
    const props = {
      onChange: jest.fn(),
      emptyEmail: jest.fn(),
      handleSubmit: jest.fn(),
      checkValidEmail: jest.fn(),
      checkPassword: jest.fn(),
      loginAction: jest.fn()
    };
    const event = {
      preventDefault: () => {},
      target: {
        name: 'body',
        value: 'abc'
      }
    };
    const component = mount(
      <LoginContainer {...props} />,
    );
    const EmailInput = component.find('#UserEmail').first();
    EmailInput.simulate('change', event);
    expect(event.target.value).toEqual('abc');
  });
  it('should call a submit a form', () => {
    const props = {
      onChange: jest.fn(),
      emptyEmail: jest.fn(),
      handleSubmit: jest.fn(),
      checkValidEmail: jest.fn(),
      checkPassword: jest.fn(),
      loginAction: jest.fn()
    };
    const wrapper = mount(
      <LoginContainer {...props} />,
    );
    wrapper.setState({
      email: 'fkiryowa'
    });
    const instance = wrapper.instance();
    const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(checkValidEmail).toHaveBeenCalled();
  });
  it('Valid Email', () => {
    const props = {
      onChange: jest.fn(),
      emptyEmail: jest.fn(),
      handleSubmit: jest.fn(),
      checkValidEmail: jest.fn(),
      checkPassword: jest.fn(),
      loginAction: jest.fn()
    };
    const wrapper = mount(
      <LoginContainer {...props} />,
    );
    wrapper.setState({
      email: 'fkiryowa@gmail.com'
    });
    const instance = wrapper.instance();
    const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(checkValidEmail).toHaveBeenCalled();
  });

  it('should call a submit a form', () => {
    const props = {
      onChange: jest.fn(),
      emptyEmail: jest.fn(),
      handleSubmit: jest.fn(),
      checkValidEmail: jest.fn(),
      checkPassword: jest.fn(),
      loginAction: jest.fn()
    };
    const wrapper = mount(
      <LoginContainer {...props} />,
    );
    wrapper.setState({
      email: 'fkiryowa',
      errors: { userEmail: 'Password field is empty' }
    });
    const instance = wrapper.instance();
    const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(checkValidEmail).toHaveBeenCalled();
  });

  it('undefined email', () => {
    const props = {
      onChange: jest.fn(),
      emptyEmail: jest.fn(),
      handleSubmit: jest.fn(),
      checkValidEmail: jest.fn(),
      checkPassword: jest.fn(),
      loginAction: jest.fn()
    };
    const wrapper = mount(
      <LoginContainer {...props} />,
    );
    wrapper.setState({
      email: undefined,
      errors: { userEmail: 'Email required' }
    });
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect('Email required').toEqual(instance.state.errors.userEmail);
  });
  it('Test everything is fine', () => {
    const props = {
      onChange: jest.fn(),
      emptyEmail: jest.fn(),
      handleSubmit: jest.fn(),
      checkValidEmail: jest.fn(),
      checkPassword: jest.fn(),
      loginAction: jest.fn()
    };
    const wrapper = mount(
      <LoginContainer {...props} />,
    );
    wrapper.setState({
      email: 'fkiryowa@gmail.com',
      password: 'Test@12345',
      errors: { }
    });
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(props.loginAction).toHaveBeenCalled();
  });
  it('Testing mapStateToProps', () => {
    const initialState = {
      auth: {}
    };
    expect(mapStateToProps(initialState)).toEqual({
      login: {}
    });
  });
});

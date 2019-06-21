import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { LoginContainer, mapStateToProps } from '../../containers/LoginContainer';
import { LogoutContainer } from '../../containers/LogoutContainer';

describe('loginContainer Component', () => {
  let wrapper = shallow(<LogoutContainer logoutAction = {jest.fn}/>);
  wrapper.instance().componentWillMount();

  wrapper = shallow(<LoginContainer />);

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
        name: 'email',
        value: 'abc'
      }
    };
    const emptypassword = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: undefined
      }
    };
    const component = shallow(
      <LoginContainer {...props} />
    );
    component.setState({ email: "email" });
    component.instance().onChange(event);
    expect(component.instance().state.email).toBe('abc');
    expect(component.instance().checkPassword(undefined)).toBe(false);
    component.setState({ email: 'mwinel@live.com', password: undefined });
    component.instance().handleSubmit(emptypassword);
    expect(component.state('errors').userPassword).toBe('Password field is empty');
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
    const wrapper = shallow(
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
    const wrapper = shallow(
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
    const wrapper = shallow(
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
    const wrapper = shallow(
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
    const wrapper = shallow(
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

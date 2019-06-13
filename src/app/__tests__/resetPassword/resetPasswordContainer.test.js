import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ResetPassword, mapStateToProps as RP_map } from '../../containers/ResetPassword/ResetPassword';
import { ResetPassword as RequestResetPassword, mapStateToProps as RRP_map } from '../../containers/ResetPassword/RequestResetPassword';
import Errors from '../../containers/Errors';

describe('<ResetPassword />', () => {
  const props = {
    message: "Password reset was successfull.",
    errors: ["ada"],
    resetPasswordAction: a => a,
    match: { params: { token: "token" } }
  };
  const wrapper = shallow(<ResetPassword {...props} />);

  it('onclick should update state', () => {
    const event = {
      target: {
        name: "password",
        value: "password"
      }
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state.password).toEqual('password');
  });

  it('onsubmit should update state', () => {
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.instance().onSubmit(event);
    expect(wrapper.instance().state.isDisplayMessage).toBeTruthy();
    expect(wrapper.instance().state.message).toBe("Please wait ..");
  });

  it('componentWillReceiveProps should update state', () => {
    wrapper.instance().componentWillReceiveProps({});
    wrapper.instance().componentWillReceiveProps(props);
    expect(wrapper.instance().state.errors).toEqual(["ada"]);
    expect(wrapper.instance().state.message).toBe("Password reset was successfull.");
  });
});

describe('<RequestResetPassword />', () => {
  const props = {
    message: "Check your email-address for a reset-password link.",
    errors: ["ada"],
    resetPasswordRequestAction: a => a
  };
  const wrapper = shallow(<RequestResetPassword {...props} />);

  it('onclick should update state', () => {
    const event = {
      target: {
        name: "email",
        value: "email"
      }
    };
    RRP_map({RequestResetPassword:{message: '',errors: ''}});
    RP_map({RequestResetPassword:{message: '',errors: ''}});
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state.email).toEqual('email');
  });

  it('onsubmit should update state', () => {
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.instance().onSubmit(event);
    expect(wrapper.instance().state.isDisplayMessage).toBeTruthy();
    expect(wrapper.instance().state.message).toBe("Please wait ..");
  });

  it('componentWillReceiveProps should update state', () => {
    wrapper.instance().componentWillReceiveProps({});
    wrapper.instance().componentWillReceiveProps(props);
    expect(wrapper.instance().state.errors).toEqual(["ada"]);
    expect(wrapper.instance().state.message).toBe("Check your email-address for a reset-password link.");
  });
});

describe('<Errors />', () => {
  let wrapper;
  let state = {
    errors: ['Error message']
  };
  wrapper = mount(<Errors props={state} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('componentWillReceiveProps should update state', () => {
    wrapper.instance().componentWillReceiveProps({});
    wrapper.instance().componentWillReceiveProps({ errors: { error: ['Error message'] } });
    wrapper.instance().componentWillReceiveProps(state);
    expect(wrapper.instance().state.errors).toEqual(["Error message"]);
  });
});

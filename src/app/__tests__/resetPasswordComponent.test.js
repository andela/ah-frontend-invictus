import React from 'react';
import PasswordResetForm from '../components/PasswordResetForm';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('<PasswordReset />', () => {
  let state = {
    password: "",
    password2: "",
    token: "",
    errors: [],
    form: "password",
    message: "message",
    isDisplayMessage: true
  };
  shallow(
    <PasswordResetForm
      props={{ onSubmit: jest.fn(),
        onChange: jest.fn(),
        state: { ...state,
          isDisplayMessage: false,
          form: "email",
          errors: ['k']
        } }} />
  );
  const wrapper = shallow(
    <PasswordResetForm
      props={{ onSubmit: jest.fn(),
        onChange: jest.fn(),
        state: state }} />
  );

  it('renders PasswordReset page', () => {
    const message = <h5>Create Password</h5>;
    expect(wrapper.contains(message)).toBe(true);
    expect(wrapper.contains(message)).toEqual(true);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Login from '../../components/Login';

describe('<Login />', () => {
  let wrapper;
  const props = {
    handleSubmit: jest.fn(),
    onChange: jest.fn(),
    email: '',
    password: '',
    errors: {}
  };
  it('renders the login page', () => {
    wrapper = shallow(<Login {...props} />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

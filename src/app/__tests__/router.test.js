import React from 'react';
import toJson from 'enzyme-to-json';
import { render } from 'enzyme';
import Router from '../../Router';

describe('<Router />', () => {
  let wrapper = render(<Router />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

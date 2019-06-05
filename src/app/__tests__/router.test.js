import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from "enzyme";
import Router from '../../Router';

describe('<Router />', () => {
  let wrapper = shallow(<Router />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

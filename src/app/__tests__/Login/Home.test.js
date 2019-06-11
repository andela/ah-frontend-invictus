import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

describe('<Home />', () => {
  let wrapper = shallow(<Home />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

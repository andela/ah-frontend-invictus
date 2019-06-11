import React from 'react';
import toJson from 'enzyme-to-json';
import { render } from 'enzyme';
import Home from '../../components/Home';

describe('<Home />', () => {
  let wrapper = render(<Home />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

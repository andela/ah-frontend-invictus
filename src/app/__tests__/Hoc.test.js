import React from 'react';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import { shallow } from 'enzyme';
import Aux from '../../app/hoc/Aux';

describe('<Aux />', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Aux />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

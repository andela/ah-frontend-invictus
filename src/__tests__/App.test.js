import React from 'react';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SpinnerComponent } from '../../components/SpinnerComponent';

describe('<SpinnerComponent />', () => {
  let wrapper;
  it('it renders spinner without crashing', () => {
    wrapper = shallow(<SpinnerComponent />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ProfileComponent from '../../components/ProfileComponent';

describe('<ProfileComponent />', () => {
  let wrapper;
  const props = {
    state: {
      profile: {
        profile: {
          firstname: 'edna',
          lastname: 'nakajugo',
          username: 'nakajugo',
          bio: 'i love singing'
        }

      }
    }
  };
  it('profile component renders without fail', () => {
    wrapper = shallow(<ProfileComponent {...props} />);
  });
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

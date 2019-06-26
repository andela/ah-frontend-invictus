import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { FollowContainer,  mapStateToProps } from '../../containers/FollowContainer';

describe('Testing Follow Container', () => {
  const props = {
    componentDidMount: jest.fn(),
    followUser: jest.fn(),
  }

  it('matches snapshot', () => {
    const wrapper = shallow(<FollowContainer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Testing mapStateToProps', () => {
    const mapFunc = mapStateToProps (
      {
        auth: {
          login_success: {
            username: 'username'
          }
        }
      }
    );
    expect(mapFunc).toMatchSnapshot({profiles: undefined, following: undefined, currentUser: 'username'});
  });
});
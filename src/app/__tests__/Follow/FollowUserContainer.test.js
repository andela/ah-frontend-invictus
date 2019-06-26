import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { FollowUserContainer } from  '../../containers/FollowUserContainer';

describe('Testing FollowUserContainer', () => {
    const props = {
        followUsers: jest.fn(),
        followAGivenUser: jest.fn(),
    }

    it('matches snapshot', () => {
        const wrapper = shallow(<FollowUserContainer {...props } />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('it should call followAGivenUser and followUsers ', () => {
        const props = {
            followAGivenUser: jest.fn(),
            followUsers: jest.fn(),
        }
        const wrapper = shallow(<FollowUserContainer {...props } />);
        const instance = wrapper.instance();
        instance.followAGivenUser('username');
        expect(props.followUsers).toHaveBeenCalledWith('username');
        expect(props.followUsers).toHaveBeenCalledWith('username');
    });

});
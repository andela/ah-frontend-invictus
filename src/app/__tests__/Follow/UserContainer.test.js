import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { UsersContainer } from  '../../containers/UsersContainer';

describe('Testing User Container', () => {
    const props = {
        followAGivenUser: jest.fn(),
        unfollowAGivenUser:jest.fn(),
        fetchUser: jest.fn(),
        followUser: jest.fn(),
        unfollowUsers: jest.fn(),
        followUsers: jest.fn(),
    }

    it('matches snapshot', () => {
        const wrapper = shallow(<UsersContainer {...props } />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('it should call followAGivenUser and unfollowAGivenUser ', () => {
        const props = {
            followAGivenUser: jest.fn(),
            unfollowAGivenUser:jest.fn(),
            fetchUser: jest.fn(),
            followUser: jest.fn(),
            unfollowUsers: jest.fn(),
            followUsers: jest.fn(),
        }
        const wrapper = shallow(<UsersContainer {...props } />);
        const instance = wrapper.instance();
        instance.followAGivenUser('username');
        instance.unfollowAGivenUser('username');
        expect(props.followUsers).toHaveBeenCalledWith('username');
        expect(props.unfollowUsers).toHaveBeenCalledWith('username');
    });


});
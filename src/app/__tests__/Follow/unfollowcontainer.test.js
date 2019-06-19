import React from 'react';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {UnFollowContainer} from '../../containers/UnfollowConatainer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    unfollowUsers: {}
}
const store = mockStore(initialState);
describe('Testing UnFollowContainer', () => {
    it('matches snapshot', () => {
        const props = {
            unfollowUsers: jest.fn(),
            unfollowAGivenUser: jest.fn(),
        }
        const wrapper = shallow(
            <Provider store={store}>
                <UnFollowContainer {...props} />
            </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('it should call unfollowAGivenUser and unfollowUsers ', () => {
        const props = {
            // unfollowAGivenUser: jest.fn(),
            unfollowUsers: jest.fn()
        }
        const wrapper = shallow(
                <UnFollowContainer {...props} />
                );
        const instance = wrapper.instance();
        instance.unfollowAGivenUser('username');
        expect(props.unfollowUsers).toHaveBeenCalled();
    });

});
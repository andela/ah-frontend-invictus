import React from 'react';
import { shallow } from "enzyme";
import { NotificationsContainer, mapStateToProps } from "../containers/NotificationsContainer";

describe('<NotificationsContainer/>', () => {
    let wrapper;
    const props = {
        notificationsAction: jest.fn()
    };
    beforeEach(() => {
        wrapper = shallow(<NotificationsContainer {...props} />);
    });
    it("should render notifications container without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should call the notifications action", () => {
        const props = {
            notificationsAction: jest.fn()
        };
        let wrapper = shallow(<NotificationsContainer {...props} />);
        const instance = wrapper.instance();
        expect(instance.props.notificationsAction).toHaveBeenCalled();
    });

    it("should map state to props", () => {
        const initialState = {
            notifications: { notificationsResponse: {} }
        }
        expect(mapStateToProps(initialState)).toEqual({
            notificationsResponse: {}
        });
    });
});

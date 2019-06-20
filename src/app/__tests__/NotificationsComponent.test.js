import React from 'react';
import { shallow } from "enzyme";
import NotificationsComponent from "../components/NotificationsComponent";
import toJson from 'enzyme-to-json';

describe('<NotificationsComponent/>', () => {
    let wrapper;
    let props = {
        notificationsResponse: { notifications: [{ message: "your article was liked" }] }
    };
    it('renders notifications component', () => {
        shallow(<NotificationsComponent {...props} />);
        props.notificationsResponse.notifications = undefined;
        wrapper = shallow(<NotificationsComponent {...props} />);
    });
    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

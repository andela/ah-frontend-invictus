import NotificationsReducer from '../../redux/reducers/NotificationsReducer';
import { notificationTypes } from "../../redux/actions/types";

const state = {
    notificationsResponse: {}
};

const data = {
    notifications: []
};

describe('notifications reducer test', () => {
    let newState;
    it('it tests the reducer is called', () => {
        const newstate = NotificationsReducer(state, {});
        expect(newstate).toEqual(state);
    });
    it('should return new state with notifications on success', () => {
        newState = NotificationsReducer(state,
            {
                type: notificationTypes.NOTIFICATIONS,
                payload: data
            });
        expect(newState).toEqual({
            ...state, notificationsResponse: data
        });
    });
});

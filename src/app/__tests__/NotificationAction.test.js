import { notificationsAction } from "../../redux/actions/NotificationsAction";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { notificationTypes } from "../../redux/actions/types";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('Notifications Article action', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    it("should retrieve notifications successfully", () => {
        const data = {
            notifications: []
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: data
            });
        });
        const actionExpected = [
            {
                type: notificationTypes.NOTIFICATIONS,
                payload: data
            }
        ];
        const store = mockStore({});
        return store
            .dispatch(notificationsAction())
            .then(() => {
                expect(store.getActions()).toEqual(actionExpected);
            });
    });
});

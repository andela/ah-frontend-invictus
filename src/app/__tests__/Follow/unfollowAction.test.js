import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { userTypes } from '../../../redux/actions/types';
import unfollowUsers from '../../../redux/actions/UnfollowAction';


describe('Unfollows a user', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    beforeEach(() => moxios.install(axios));
    afterEach(() => moxios.uninstall(axios));

    it('successfully unfollows a user', () => {
      const store = mockStore({ profiles: [] });
      const expectedActions = [
        {
          type: userTypes.UNFOLLOW,
          payload: {data: 'arsenal'}
        }
      ];
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {data: 'arsenal'}
        });
      });
      return store.dispatch(unfollowUsers("username")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('It fails to unfollow a user', () => {
      const store = mockStore({ profiles: [] });
      const expectedActions = [
        {
          type: userTypes.UNFOLLOW_FAIL,
          payload: { errors: "User not found." }
        }
      ];
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: { errors: "User not found." }
        });
      });
      return store.dispatch(unfollowUsers("username")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { userTypes } from '../../../redux/actions/types';
import followUser from '../../../redux/actions/FollowingAction';


describe('list of followed users', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    beforeEach(() => moxios.install(axios));
    afterEach(() => moxios.uninstall(axios));

    it('Users that alodded in user follows', () => {
      const store = mockStore({ profiles: [] });
      const expectedActions = [
        {
          type: userTypes.FOLLOW,
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
      return store.dispatch(followUser("username")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

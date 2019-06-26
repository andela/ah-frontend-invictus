import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { userTypes } from '../../../redux/actions/types';
import followUsers from '../../../redux/actions/followAction';


describe('follows a user', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    beforeEach(() => moxios.install(axios));
    afterEach(() => moxios.uninstall(axios));

    it('successfully follows a user', () => {
      const store = mockStore({ profiles: [] });
      const expectedActions = [
        {
          type: userTypes.FOLLOW_USER,
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
      return store.dispatch(followUsers("username")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

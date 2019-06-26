import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import fetchUsers from '../../../redux/actions/FetchUsersAction';
import { userTypes } from '../../../redux/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch users', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('successfully fetches users', () => {
    const response = {
      data: {
        profiles: [
          {
            "id": 1,
            "image": "",
            "bio": "",
            "firstname": "",
            "lastname": "",
            "updated_at": "2019-06-17T02:05:35.588872Z",
            "user": "sanygreen"
          },
          {
            "id": 3,
            "image": "https://firebasesto",
            "bio": "",
            "firstname": "",
            "lastname": "",
            "updated_at": "2019-06-17T04:43:11.360034Z",
            "user": "Josean"
          }]
      },
    }
    const store = mockStore({ profiles: [] });
    const expectedActions = [
      {
        type: userTypes.FETCH_USERS,
        payload: response.data.profiles
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response.data
      });
    });
    return store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

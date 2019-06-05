import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { fetchProfile, editProfile } from '../../../redux/actions/profileActions';
import { profileTypes } from '../../../redux/actions/types';
import thunk from 'redux-thunk';

const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe('fetch profile', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  it('it should fetch profile', () => {
    const expectedData = {
      profile: {
        firstname: "margarita",
        lastname: "Nakajugo",
        username: "edna1",
        image: "https://firebasestorage.googleapis.com/v0/b/ah-frontend-invictus.appspot.com/o/images%2FPhotoGrid_1549744503436%20(1).jpg?alt=media&token=15234b51-ca88-488e-8bc3-494d6e717ac8",
        bio: "I love singing and dancing.",
        following: false
      }
    };

    const expecetedActions = [
      {
        type: 'IS_LOADING'
      },
      {
        payload: {
          bio: "I love singing and dancing.",
          firstname: "margarita",
          following: false,
          image: "https://firebasestorage.googleapis.com/v0/b/ah-frontend-invictus.appspot.com/o/images%2FPhotoGrid_1549744503436%20(1).jpg?alt=media&token=15234b51-ca88-488e-8bc3-494d6e717ac8",
          lastname: "Nakajugo",
          username: "edna1"

        },
        type: 'USER_REQUEST_VIEW'
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedData
      });
    });
    const store = mockStore({});
    return store.dispatch(fetchProfile())
      .then(() => {
        expect(store.getActions()).toEqual(expecetedActions);
      });
  });

  it('tests error on fetch profile', () => {
    const responseData = {
      profile: { detail: "The token has expired, please login again." }

    };
    const expecetedActions = [
      {
        type: 'IS_LOADING'
      },
      {
        type: profileTypes.PROFILE_VIEW_FAILED,
        payload: "The token has expired, please login again."
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: responseData
      });
    });
    const store = mockStore({});
    return store.dispatch(fetchProfile())
      .then(() => {
        expect(store.getActions()).toEqual(expecetedActions);
      });
  });

  it('successfull edit profile', () => {
    const editData = {
      profile: {
        firstname: "edINAkjvhdfihbvifH",
        lastname: "Nakajugo",
        bio: "I work at Andela"
      }
    };
    const expectedData = {
      firstname: "edINAkjvhdfihbvifH",
      lastname: "Nakajugo",
      username: "edna1",
      image: "",
      bio: "I work at Andela",
      following: false
    };
    const expecetedActions = [
      {
        type: profileTypes.EDIT_PROFILE,
        payload: expectedData
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { profile: expectedData }
      });
    });
    const store = mockStore({});
    return store.dispatch(editProfile(editData))
      .then(() => {
        expect(store.getActions()).toEqual(expecetedActions);
      });
  });

  it('tests error on edit', () => {
    const editData = {
      profile: {
        firstname: "edINAkjvhdfihbvifH",
        lastname: "Nakajugo",
        bio: "I work at Andela"
      }
    };
    const responseData = {
      profile: { detail: "The token has expired, please login again." }
    };
    const expecetedActions = [
      {
        type: profileTypes.FAIL_EDIT,
        payload: "The token has expired, please login again."
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: responseData
      });
    });
    const store = mockStore({});
    return store.dispatch(editProfile(editData))
      .then(() => {
        expect(store.getActions()).toEqual(expecetedActions);
      });
  });
});

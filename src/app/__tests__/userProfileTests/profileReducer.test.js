import profileReducer from '../../../redux/reducers/profileReducer';
import { profileTypes } from '../../../redux/actions/types';

const initstate = {
  profile: []
};
const profile = {
  firstname: 'edna',
  lastname: 'Nakajugo',
  username: 'edna1',
  image: 'http://127.0.0.1:8000/api/users/profiles/james.png',
  bio: 'I work at Andela',
  following: false
};
const error = { error: { detail: "The token has expired, please login again." } };

describe('profilereducer', () => {
  let newstate;
  it('tests the initail state of reducer', () => {
    const newstate = profileReducer(initstate, {});
    expect(newstate).toEqual(initstate);
  });

  it('tests isloading', () => {
    newstate = profileReducer(initstate,
      {
        type: profileTypes.IS_LOADING,
        payload: profile
      });
    expect(newstate).toEqual({
      isLoading: true,
      profile: []
    });
  });

  it('tests succesful view of profile', () => {
    newstate = profileReducer(initstate,
      {
        type: profileTypes.PROFILE_VIEW,
        payload: profile
      });
    expect(newstate).toEqual({
      isLoading: false,
      profile
    });
  });

  it('tests unsuccessful view of profile', () => {
    newstate = profileReducer(initstate, {
      type: profileTypes.PROFILE_VIEW_FAILED,
      payload: error,
      isLoading: false
    });
    expect(newstate).toEqual({
      ...initstate,
      error,
      isLoading: false
    });
  });

  it('tests successfully edits profile', () => {
    newstate = profileReducer(initstate, {
      type: profileTypes.EDIT_PROFILE,
      payload: profile
    });
    expect(newstate).toEqual({
      editSuccess: true,
      profile: profile

    });
  });
});



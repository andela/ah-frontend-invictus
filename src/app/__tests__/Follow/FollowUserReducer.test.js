import { userTypes } from '../../../redux/actions/types';
import FollowUserReducer from '../../../redux/reducers/FollowUserReducer';


describe('Initial follow user reducer', () => {
  it('should return default state', () => {
    const newState = FollowUserReducer(undefined, {});
    expect(newState).toEqual({ profiles: [], profile: {}, errors: "" });
  });
  it('should successfully follow a user', () => {
    const initialState = {
      profiles: [],
      profile: {},
      errors: ""
    };
    const expectation = {
      profiles: "You are unfollowing this person",
      profile: {},
      errors: ""
    }
    const action = {
      type: userTypes.FOLLOW_USER,
      payload: "You are unfollowing this person",
    };
    const newState = FollowUserReducer(initialState, action)
    expect(newState).toEqual(expectation);
  });

  it('should fail to follow a user', () => {
    const initialState = {
      profiles: [],
      profile: {},
      errors: ""
    };
    const expectation = {
      profiles:[],
      profile: {},
      errors: "That user does not exist"
    }
    const action = {
      type: userTypes.FOLLOW_USER_FAIL,
      payload: "That user does not exist"
    };
    const newState = FollowUserReducer(initialState, action)
    expect(newState).toEqual(expectation);
  });
});




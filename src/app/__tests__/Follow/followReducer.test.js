import { userTypes } from '../../../redux/actions/types';
import FollowReducer from '../../../redux/reducers/FollowReducer';


describe('Initial follower reducer', () => {
  it('should return default state', () => {
    const newState = FollowReducer(undefined, {});
    expect(newState).toEqual({ profiles: [], profile: {}, errors: "" });
  });
  it('should successfully follow a user', () => {
    const initialState = {
      profiles: [],
      profile: {},
      errors: ""
    };
    const expectation = {
      profiles: "You are following this person",
      profile: {},
      errors: ""
    }
    const action = {
      type: userTypes.FOLLOW,
      payload: 'You are following this person'
    };
    const newState = FollowReducer(initialState, action)
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
      type: userTypes.FOLLOW_FAIL,
      payload: "That user does not exist"
    };
    const newState = FollowReducer(initialState, action)
    expect(newState).toEqual(expectation);
  });
});




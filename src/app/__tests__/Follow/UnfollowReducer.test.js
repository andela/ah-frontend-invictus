import { userTypes } from '../../../redux/actions/types';
import UnfollowReducer from '../../../redux/reducers/UnfollowReducer';


describe('Initial unfollow reducer', () => {
  it('should return default state', () => {
    const newState = UnfollowReducer(undefined, {});
    expect(newState).toEqual({ profiles: [], profile: {}, errors: "" });
  });
  it('should successfully unfollow a user', () => {
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
      type: userTypes.UNFOLLOW,
      payload: 'You are unfollowing this person'
    };
    const newState = UnfollowReducer(initialState, action)
    expect(newState).toEqual(expectation);
  });

  it('should fail to unfollow a user', () => {
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
      type: userTypes.UNFOLLOW_FAIL,
      payload: "That user does not exist"
    };
    const newState = UnfollowReducer(initialState, action)
    expect(newState).toEqual(expectation);
  });
});




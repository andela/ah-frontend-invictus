import { userTypes } from '../../../redux/actions/types';
import FetchUsersReducer from '../../../redux/reducers/FetchUsersReducer';


describe('Initial follow user reducer', () => {
  it('should return default state', () => {
    const newState = FetchUsersReducer(undefined, {});
    expect(newState).toEqual({ profiles: [], profile: {}, errors: "" });
  });
  it('should successfully fetch your followers', () => {
    const initialState = {
      profiles: [],
      profile: {},
      errors: ""
    };
    const expectation = {
      profiles: "These are your followings",
      profile: {},
      errors: ""
    }
    const action = {
      type: userTypes.FETCH_USERS,
      payload: "These are your followings",
    };
    const newState = FetchUsersReducer(initialState, action)
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
      type: userTypes.FETCH_USERS_FAIL,
      payload: "That user does not exist"
    };
    const newState = FetchUsersReducer(initialState, action)
    expect(newState).toEqual(expectation);
  });
});




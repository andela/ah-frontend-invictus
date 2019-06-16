import SocialAuthReducer from "../../../redux/reducers/socialAuth";
import { socialTypes } from "../../../redux/actions/types";

const initialState = {};

describe("facebook social auth fail", () => {
  it('tests facebook fail', () => {
    const newState = SocialAuthReducer(initialState,
      { type: socialTypes.GOOGLE_FAIL });
    expect(newState).toEqual({});
  });
});

describe("google social auth fail", () => {
  it('tests google fail', () => {
    const newState = SocialAuthReducer(initialState,
      { type: socialTypes.FACEBOOK_FAIL });
    expect(newState).toEqual({});
  });
});

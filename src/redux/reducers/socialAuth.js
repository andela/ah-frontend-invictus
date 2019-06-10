import { socialTypes } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  facebookLogin: false,
  googleLogin: false,
  payload: '',
  token: ''
};

const SocialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
  case socialTypes.FACEBOOK_AUTH:
    return {
      ...state,
      isAuthenticated: true,
      facebookLogin: true,
      payload: action.payload,
      token: action.payload.token
    };
  case socialTypes.FACEBOOK_FAIL:
    return { ...state, payload: action.payload };
  case socialTypes.GOOGLE_AUTH:
    return {
      ...state,
      isAuthenticated: true,
      googleLogin: true,
      payload: action.payload,
      token: action.payload.token
    };
  case socialTypes.GOOGLE_FAIL:
    return { ...state, payload: action.payload };
  default:
    return state;
  }
};

export default SocialAuthReducer;

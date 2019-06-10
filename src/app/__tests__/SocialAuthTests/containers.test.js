import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { SocialAuthentication, mapStateToProps } from '../../containers/SocialAuth';
import socialAuthReducer from '../../../redux/reducers/socialAuth';
import { socialTypes } from '../../../redux/actions/types';
import socialAuth from '../../../redux/actions/socialAuth/socialAuthAction';

const storeItems = {};
const mockStore = configureStore();
const store = mockStore(storeItems);

const initialState = {
  isAuthenticated: false,
  facebookLogin: false,
  payload: '',
  token: ''
};

const initialStateGoogle = {
  isAuthenticated: false,
  googleLogin: false,
  payload: '',
  token: ''
};

const props = {
  socialAuth: jest.fn(),
  onClick: jest.fn()
};

const setUp = () => {
  const social = shallow(<SocialAuthentication store={store} {...props} />);
  return social;
};

describe('Social Auth Reducer', () => {
  it('tests inititial state of social auth reducer', () => {
    const newState = socialAuthReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('tests successful authentication through facebook', () => {
    let newState;
    newState = socialAuthReducer(initialState, {
      type: socialTypes.FACEBOOK_AUTH,
      payload: {
        email: '',
        message: '',
        token: '',
        username: ''
      },
      token: ''
    });
    expect(newState).toEqual(
      {
        isAuthenticated: true,
        facebookLogin: true,
        payload: {
          email: '',
          message: '',
          token: '',
          username: '' },
        token: ''
      }
    );
  });

  it('tests successful authentication through google', () => {
    let newState;
    newState = socialAuthReducer(initialStateGoogle, {
      type: socialTypes.GOOGLE_AUTH,
      payload: {
        email: '',
        message: '',
        token: '',
        username: ''
      },
      token: ''
    });
    expect(newState).toEqual(
      {
        isAuthenticated: true,
        googleLogin: true,
        payload: {
          email: '',
          message: '',
          token: '',
          username: '' },
        token: ''
      }
    );
  });
});

describe('facebook social authentication', () => {
  it('matches snapshot', () => {
    const wrapper = setUp();
    mapStateToProps(initialState);
    wrapper.instance().responseFacebook(socialAuth());
    expect(wrapper.instance()).toMatchSnapshot();
  });
});

describe('google social authentication', () => {
  it('matches snapshot', () => {
    const wrapper = setUp();
    wrapper.instance().googleResponse(socialAuth());
    expect(wrapper.instance()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ProfileContainer, mapStateToProps } from '../../containers/ProfileContainer';

describe('<ProfileContainer/>', () => {
  let wrapper;
  const props = {
    fetchProfile: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<ProfileContainer {...props} />);
  });
  it('renders without fail', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('it should map state to props', () => {
    const initialState = {
      profileReducer: { isLoading: false }
    };
    expect(mapStateToProps(initialState)).toEqual({
      isLoading: false,
      profile: {
        isLoading: false
      }
    });
  });
});


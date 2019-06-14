import React from 'react';
import { shallow } from 'enzyme';
import { EditProfileContainer, mapStateToProps } from '../../containers/editProfileContainer';

describe('<EditProfileContainer />', () => {
  let wrapper;
  let instance;
  const props = {
    profile: {
      profile: {
        firstname: 'edna',
        lastname: 'nakajugo',
        username: 'nakajugo',
        bio: 'i love singing',
        image: ""
      }
    },
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    editProfile: jest.fn(),
    history: {
      push: jest.fn()
    }
  };
  const nextProps = {
    editSuccess: true
  };

  beforeEach(() => {
    wrapper = shallow(<EditProfileContainer {...props} />);
    instance = wrapper.instance();
  });

  it('renders without fail', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should submit form when changed', () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.onSubmit(e);
    expect(props.editProfile).toHaveBeenCalledTimes(1);
  });

  it('should handle image upload', () => {
    wrapper.find("#profile").simulate("change", {
      target: {
        name: "ian",
        files: [new File(["../../styles/images/profile.jpeg"], "sample.png")]
      }
    });
  });

  it('should handle input change', () => {
    const e = {
      target: {
        name: "bio",
        value: "I love singing"
      }

    };
    instance.onChange(e);
    expect(props.editProfile).toHaveBeenCalledTimes(1);
  });

  it("should change to profile page on edit success", () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith("/profile");
  });

  it('it should map state to props', () => {
    const initialState = {
      profileReducer: {}
    };
    expect(mapStateToProps(initialState)).toEqual({
      profile: {}
    });
  });
});

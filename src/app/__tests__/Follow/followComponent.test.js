import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import FollowComponent from '../../components/FollowComponent';

const props = {
  state: {
    "profiles": {
      "profiles": [{
        "id": 1,
        "bio": "",
        "firstname": "",
        "lastname": "",
        "updated_at": "2019-06-17T02:05:35.588872Z",
        "user": "sanygreen"
      }]
    },
    "following": {
      "profiles": [{
        "id": 1,
        "bio": "",
        "firstname": "",
        "lastname": "",
        "updated_at": "2019-06-17T02:05:35.588872Z",
        "user": "sanygreen"
      }]
    }
  }
};
describe('<FollowComponent />', () => {
  let wrapper;
  it('renders the user followed page', () => {
    wrapper = shallow(<FollowComponent {...props} />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

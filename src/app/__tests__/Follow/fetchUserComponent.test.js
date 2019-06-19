import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import FetchUsers from '../../components/FetchUsers';

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
describe('<FetchUsers />', () => {
  let wrapper;
  it('renders the user profile page', () => {
    wrapper = shallow(<FetchUsers {...props} />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

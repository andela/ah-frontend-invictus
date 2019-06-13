import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FetchComment from '../../components/FetchComment';

describe('Testing fetch Comments Component', () => {
  let wrapper;
  const props = {
      comments: [
        {
            "id": 6,
            "author": "edna1",
            "first_index": null,
            "last_index": null,
            "body": "His name was my name too.",
            "created_at": "2019-05-16T15:22:04.375891Z",
            "updated_at": "2019-05-16T15:51:01.228909Z",
            "likes_counter": 1,
            "highlighted_text": null,
            "article": 17
        },
        {
            "id": 7,
            "author": "edna1",
            "first_index": null,
            "last_index": null,
            "body": "His name was my name too.",
            "created_at": "2019-05-16T15:22:04.375891Z",
            "updated_at": "2019-05-16T15:51:01.228909Z",
            "likes_counter": 1,
            "highlighted_text": null,
            "article": 17
        }
      ]
  }
  it('it fetches comments without crashing', () => {
    wrapper = shallow(<FetchComment {...props } />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

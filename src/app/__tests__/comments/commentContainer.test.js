import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { CommentContainer } from  '../../containers/CommentContainer';

jest.mock('react-toastify');
describe('Testing Comment Container', () => {
    const props = {
        fetchComments : jest.fn(),
        emptyBody:jest.fn(),
        handleChange: jest.fn(),
        handleSubmit: jest.fn(),
        postComment: jest.fn(),
    }

    it('matches snapshot', () => {
        const wrapper = shallow(<CommentContainer {...props } />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Testing onChange', () => {
        const wrapper = mount(<CommentContainer {...props } />);
        const event = {
            preventDefault: () => {},
            target: {
              name: 'commentBody',
              value: 'abc'
            }
          };
        const CommentBodyInput = wrapper.find('#CommentBody').first();
        CommentBodyInput.simulate('change', event);
        expect(event.target.value).toEqual('abc');
    });
    it('Testing handle Submit', () => {
        const wrapper = mount(<CommentContainer {...props } />);
        const event = {
            preventDefault: () => {},
            target: {
              name: 'commentBody',
              value: 'abc'
            }
          };
    const commentBody = undefined;
    const instance = wrapper.instance();
    const emptyBody = jest.spyOn(instance, 'emptyBody');
    instance.handleSubmit({preventDefault: jest.fn()});
    expect(emptyBody).toHaveBeenCalledWith(commentBody);

    });

    it('Testing component will receive props', () => {
      const component = shallow(<CommentContainer {...props }/>);
      const comments =  [
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
      ];
      component.setProps({ comments });
      expect(comments).toEqual(comments);
  })
});
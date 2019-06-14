import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ArticleContainer } from '../containers/ArticleContainer';

describe('Article container', () => {
  let wrapper;
  let props;
  let instance;
  beforeEach(() => {
    props = {
      handleAddTag: jest.fn(),
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      handleDeleteTag: jest.fn(),
      checkBlank: jest.fn(),
      postArticle: jest.fn(),
      title: "Town hall at Andela",
      body: "There was lots of fun and cake",
      description: "There was no TIA chant",
      tagList:[ { id: 'edna', text: 'edna' } , { id: 'food', text: 'food' } ],
      toast: {
        error: jest.fn()
      }
    };
    wrapper = shallow(<ArticleContainer {...props} />);
    instance = wrapper.instance();
  });
  it('renders without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('checks for blank', () => {
    instance.checkBlank();
    expect(props.toast.error).toHaveBeenCalledTimes(0);
  });

  it('handles form submission', () => {
    const e = {
      preventDefault: jest.fn()
    };
    instance.setState(props);
    instance.handleSubmit(e);
    expect(props.postArticle).toHaveBeenCalledTimes(1);
  });
  it('handles change', () => {
    const e = {
      target: {
        name: "title",
        value: "Town Hall at Andela"
      }
    };
    instance.handleChange(e);
  });

  it('should handle tag addition',()=>{
    const tag = {id: "edna", text: "edna"}
    instance.handleAddTag(tag)
    expect(props.handleAddTag).toHaveBeenCalledTimes(0);
  });

  it('should handle tag deletion',()=>{
    instance.setState(props);
    instance.handleDeleteTag(0);
    expect(wrapper.state('tagList'))
    .toEqual([{ id: 'food', text: 'food' }]);
  });
});

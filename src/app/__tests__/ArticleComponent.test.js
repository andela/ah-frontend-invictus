import React from 'react';
import { shallow } from 'enzyme';
import ArticleComponent from '../components/ArticleComponent';

describe('Article Component', () => {
  it('renders without errors', () => {
    const component = shallow(<ArticleComponent />);
    const wrapper = component.find('.create-article');
    expect(wrapper.length).toBe(1);
  });
  it('handles events without errors', () => {
    const props = {
      handleChange: jest.fn()
    };
    const wrapper = shallow(<ArticleComponent {...props} />);
    wrapper.find('#title-input').simulate('change');
    wrapper.find('#description-input').simulate('change');
    wrapper.find('#body-input').simulate('change');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Article, mapStateToProps } from '../../containers/articles/getArticleContainer';

const storeItems = {};
const mockStore = configureStore();
const store = mockStore(storeItems);

const props = {
  getArticleReducer: {
    article: {
      body: 'body'
    }
  },
  match: {params: {articleId:7}},
  fetchArticle: jest.fn(),
};

describe('fetch article', () => {
  const mockFetch = jest.fn();
  afterEach(() => {
    mockFetch.mock.calls = []
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Article store={store} {...props} />); 
    expect(toJson(wrapper)).toMatchSnapshot();  
  });

  it('should return article state', () => {
    const wrapper = shallow(<Article store={store} {...props}/>);
    expect(wrapper.instance().props.getArticleReducer).toEqual({article: {body: 'body'}});
  });
  
  it('testing mapStateToProps', () => {
    const initialState = {article: {}};
    expect(mapStateToProps(initialState)).toEqual({article: {}});
  });
});

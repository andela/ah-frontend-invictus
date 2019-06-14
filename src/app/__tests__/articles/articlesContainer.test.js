import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Articles, mapStateToProps } from '../../containers/articles/ArticlesContainer';

const storeItems = {};
const mockStore = configureStore();
const store = mockStore(storeItems);

const props = {
  ArticlesReducer: {
    articles: []
  },
  fetchArticles: jest.fn(),
};

describe('fetch articles', () => {
  const mockFetch = jest.fn();
  afterEach(() => {
    mockFetch.mock.calls = []
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Articles store={store} {...props} />); 
    expect(toJson(wrapper)).toMatchSnapshot();  
  });
  
  it('testing mapStateToProps', () => {
    const initialState = {articles: []};
    expect(mapStateToProps(initialState)).toEqual({articles: []});
  });
});

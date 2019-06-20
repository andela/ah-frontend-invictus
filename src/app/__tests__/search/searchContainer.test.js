import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps } from '../../containers/Search'

describe('<Search />', () => {
  let wrapper;
  const props = {
    handleChange: jest.fn(),
    handleSearch: jest.fn(),
    searchKeyword: jest.fn()
  }
  const nextProps = {
    data: []
  };

  beforeEach(() => {
    wrapper = shallow(<Search {...props} />)
  });

  it('renders without fail', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('map statet to props', ()=>{
    const initialState = {
      search:{
        Data: []
      }
    }
    expect(mapStateToProps(initialState)).toEqual({
      Data : []
    })
  });

  it('should handle change', () => {
    const e = {
      target: {
        name: "search",
        value: "what about us"
      }
    };
    wrapper.instance().handleChange(e);
  });

  it ('should receive props ', ()=>{
    wrapper.setProps({ ...nextProps });
  });

  it('should handle search', ()=>{
    const e = {
      preventDefault: jest.fn()
    };
    wrapper.instance().handleSearch(e);
    expect(props.searchKeyword).toHaveBeenCalledTimes(1);
    const title_wrapper = shallow(<Search {...props} />)
    title_wrapper.instance().setState({filter:"title"})
    title_wrapper.instance().handleSearch(e);
    const author_wrapper = shallow(<Search {...props} />)
    author_wrapper.instance().setState({filter:"author"})
    author_wrapper.instance().handleSearch(e);
    const tag_wrapper = shallow(<Search {...props} />)
    tag_wrapper.instance().setState({filter:"tag"})
    tag_wrapper.instance().handleSearch(e);

  });
});

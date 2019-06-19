import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchComponent from '../../components/SearchComponent';

describe('<SearchComponent />', () => {
  const props = {
    data: {
      article:
        [{
          id: 1,
          created_at: 'Test',
          title: 'Test',
          description: 'Test',
          author: 'Test',
          tagList: ["edna"],
          read_time: 'Test'
        }]
    }
  };
  let wrapper;
  it('it renders search without crashing', () => {
    wrapper = shallow(<SearchComponent {...props}/>);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

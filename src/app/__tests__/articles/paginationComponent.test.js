import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Pagination from '../../components/Pagination';

jest.dontMock('../../components/Pagination');

import ReactTestUtils from 'react-dom/test-utils';

const props = {
  handleClick: jest.fn(),
  handleMoveLeft: jest.fn(),
  handleMoveRight: jest.fn(),
  gotoPage: jest.fn(),
  preventDefault: jest.fn(),
  fetchPageNumbers: jest.fn(),
  totalRecords: 20,
  pageLimit: 1,
  pageNeighbours: 2
};

describe('pagination component', () => {
  let wrapper = shallow(<Pagination {...props} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should handleClick', () => {
    const page = { page: 1 }
    const evt = {
      preventDefault: jest.fn(),
      target: page
    }
    expect(wrapper.instance().handleClick(page)(evt));
  });

  it('should handleMoveLeft', () => {
    const page = { page: 1 }
    const evt = {
      preventDefault: jest.fn(),
      target: page
    }
    expect(wrapper.instance().handleMoveLeft(evt));
  });

  it('should handleMoveRight', () => {
    const page = { page: 2 }
    const evt = {
      preventDefault: jest.fn(),
      target: page
    }
    expect(wrapper.instance().handleMoveRight(evt));
  });
});

describe('test onPageChange', () => {
  it('should display', () => {
    const pagination = ReactTestUtils.renderIntoDocument(
      <Pagination
        totalRecords={12}
        pageLimit={6}
        pageNeighbours={2}
        onPageChanged={props.onPageChanged}
      />
    );
    const previousElement = ReactDOM.findDOMNode(pagination).querySelector('li:first-child');
    const nextElement = ReactDOM.findDOMNode(pagination).querySelector('li:last-child');
    expect(previousElement.className).toBe('page-item active');
    expect(nextElement.className).toBe('page-item');
  });
})

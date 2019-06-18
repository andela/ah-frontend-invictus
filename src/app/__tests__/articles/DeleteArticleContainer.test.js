import React from 'react';
import { shallow } from "enzyme";
import { DeleteArticleContainer, mapStateToProps } from "../../containers/DeleteArticle";

describe('<DeleteArticleContainer/>', () => {
    let wrapper;
    const props = {
        handleDelete: jest.fn()
    };
    beforeEach(() => {
        wrapper = shallow(<DeleteArticleContainer {...props} />);
    });
    it("should render DeleteArticle container without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should call handleDelete", () => {
        const props = {
            deleteArticleAction: jest.fn(),
            handleDelete: jest.fn()
        };
        let wrapper = shallow(<DeleteArticleContainer {...props} />);
        const instance = wrapper.instance();
        ;
    });
    it("should map state to props", () => {
        const initialState = {
            deleteArticle: {
                deleteArticleErrors: {},
                deleteArticleResponse: {}
            }
        }
        expect(mapStateToProps(initialState)).toEqual({
            deleteArticleErrors: {},
            deleteArticleResponse: {}
        });
    });
});

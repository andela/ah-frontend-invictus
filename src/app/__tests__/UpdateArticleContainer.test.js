import React from 'react';
import { shallow } from "enzyme";
import { UpdateArticleContainer, mapStateToProps } from "../containers/UpdateArticle";

describe('<UpdateArticleContainer/>', () => {
    let wrapper;
    const props = {
        fetchArticle: jest.fn(),
        updateArticleAction: jest.fn(),
        article: { article: {} }
    };
    beforeEach(() => {
        wrapper = shallow(<UpdateArticleContainer {...props} />);
    });
    it("should render UpdateArticle container without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should test the handleChange event", () => {
        const event = {
            target: {
                id: "title",
                value: "The big data problem"
            }
        };
        wrapper.instance().handleChange(event);
        expect(wrapper.instance().state.title).toBe("The big data problem");
    });
    it("should call handleSubmit event", () => {
        const props = {
            updateArticleAction: jest.fn(),
            fetchArticle: jest.fn(),
            article: { article: {} }
        };
        let wrapper = shallow(<UpdateArticleContainer {...props} />);
        const instance = wrapper.instance();
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(props.updateArticleAction).toHaveBeenCalled();
    });
    it("should map state to props", () => {
        const initialState = {
            updateArticle: {
                updateArticleErrors: {},
                updateArticleResponse: {}
            }
        }
        expect(mapStateToProps(initialState)).toEqual({
            updateArticleErrors: {},
            updateArticleResponse: {}
        });
    });
});

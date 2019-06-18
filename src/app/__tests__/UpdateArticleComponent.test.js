import React from 'react';
import { shallow } from "enzyme";
import UpdateArticleComponent from "../components/UpdateArticle";
import toJson from 'enzyme-to-json';

describe('<UpdateArticleComponent/>', () => {
    let wrapper;
    const Props = {
        handleChange: jest.fn(),
        handleSubmit: jest.fn(),
        updateArticleErrors: { errors: {} },
        localState: {
            title: "",
            body: "",
            description: ""
        }
    };
    it('renders update article page', () => {
        wrapper = shallow(<UpdateArticleComponent {...Props} />);
    });
    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


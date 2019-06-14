import React from 'react';
import { shallow } from "enzyme";
import DeleteArticleComponent from "../../components/DeleteArticle";
import toJson from 'enzyme-to-json';

describe('<DeleteArticleComponent/>', () => {
    let wrapper;
    const Props = {};
    it('renders delete article component', () => {
        wrapper = shallow(<DeleteArticleComponent {...Props} />);
    });
    it('component matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


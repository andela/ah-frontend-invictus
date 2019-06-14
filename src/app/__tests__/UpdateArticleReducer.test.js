import updateArticle from '../../redux/reducers/UpdateArticle';
import { updateArticleTypes } from "../../redux/actions/types";

const state = {
    updateArticleErrors: {},
    updateArticleResponse: {}
};

const data = {
    title: "the title",
    description: "describe",
    body: "testing the reducer",
    tagList: []
};

describe('update article reducer test', () => {
    let newState;
    it('it tests the reducer is called', () => {
        const newstate = updateArticle(state, {});
        expect(newstate).toEqual(state);
    });
    it('should return a update response  object on success', () => {
        newState = updateArticle(state,
            {
                type: updateArticleTypes.UPDATE_ARTICLE_SUCCESS,
                payload: data
            });
        expect(newState).toEqual({
            ...state, updateArticleResponse: data
        });
    });
    it('should return an update error response', () => {
        newState = updateArticle(state,
            {
                type: updateArticleTypes.UPDATE_ARTICLE_ERROR,
                payload: {
                    article: {
                        detail: "The token has expired, please login again."
                    }
                }
            });
        expect(newState).toEqual({
            ...state,
            updateArticleErrors: {
                article: {
                    detail: "The token has expired, please login again."
                }
            }
        });
    });
});

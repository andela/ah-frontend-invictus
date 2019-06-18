import deleteArticle from '../../../redux/reducers/DeleteArticle';
import { deleteArticleTypes } from "../../../redux/actions/types";

const state = {
    deleteArticleErrors: {},
    deleteArticleResponse: {}
};

describe('delete article reducer test', () => {
    let newState;
    it('it tests the reducer is called', () => {
        const newstate = deleteArticle(state, {});
        expect(newstate).toEqual(state);
    });
    it('should return a delete response  object on success', () => {
        newState = deleteArticle(state,
            {
                type: deleteArticleTypes.DELETE_ARTICLE_SUCCESS,
                payload: { response: {} }
            });
        expect(newState).toEqual({
            ...state, deleteArticleResponse: { response: {} }
        });
    });
    it('should return an delete error response', () => {
        newState = deleteArticle(state,
            {
                type: deleteArticleTypes.DELETE_ARTICLE_ERROR,
                payload: {
                    article: {
                        detail: "The token has expired, please login again."
                    }
                }
            });
        expect(newState).toEqual({
            ...state,
            deleteArticleErrors: {
                article: {
                    detail: "The token has expired, please login again."
                }
            }
        });
    });
});

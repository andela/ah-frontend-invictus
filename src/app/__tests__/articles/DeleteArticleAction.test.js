import { deleteArticleAction } from "../../../redux/actions/DeleteArticle";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { deleteArticleTypes } from "../../../redux/actions/types";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('Delete Article action', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    it("should delete an article successfully", () => {
        const response = {
            data: {
                article: "You have succesfully deleted the article"
            }
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: response.data
            });
        });
        const actionExpected = [
            {
                type: deleteArticleTypes.DELETE_ARTICLE_SUCCESS,
                payload: response.data
            }
        ];
        const store = mockStore({});
        return store
            .dispatch(deleteArticleAction())
            .then(() => {
                expect(store.getActions()).toEqual(actionExpected);
            });
    });
    it('should return errors on failure to delete article', () => {
        const error = {
            response: {
                data: {
                    article: {
                        detail: {}
                    }
                }
            }
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: error.response.data
            });
        });
        const actionExpected = [
            {
                type: deleteArticleTypes.DELETE_ARTICLE_ERROR,
                payload: error.response.data
            }
        ];
        const store = mockStore({});
        return store
            .dispatch(deleteArticleAction(1))
            .catch(() => {
                console.log(store.getActions())
                expect(store.getActions()).toEqual(actionExpected);
            });
    });
});

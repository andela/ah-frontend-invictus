import { updateArticleAction } from "../../redux/actions/UpdateArticle";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { updateArticleTypes } from "../../redux/actions/types";

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('Update Article action', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    it("should update an article successfully", () => {
        const data = {
            title: "the title",
            description: "describe",
            body: "testing the reducer",
            tagList: []
        };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response: data
            });
        });
        const actionExpected = [
            {
                type: updateArticleTypes.UPDATE_ARTICLE_SUCCESS,
                payload: data
            }
        ];
        const userData = {
            title: "the title",
            description: "describe",
            body: "testing the reducer",
            tagList: []
        };
        const store = mockStore({});
        return store
            .dispatch(updateArticleAction(userData))
            .then(() => {
                expect(store.getActions()).toEqual(actionExpected);
            });
    });
    it('should return errors on failure to update article', () => {
        const errors = {
            title: ["This filled is required"],
            description: ["This filled is required"],
            body: ["This filled is required"],
            tagList: ["This filled is required"]
        };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: { error: { response: { data: { article: { detail: "Invalid token" } } } } }
            });
        });
        const actionExpected = [
            {
                type: updateArticleTypes.UPDATE_ARTICLE_ERROR,
                payload: errors
            }
        ];
        const userData = {
            title: '',
            description: 'hhghhg',
            body: '',
            tagList: ''
        };
        const store = mockStore({});
        return store
            .dispatch(updateArticleAction(userData))
            .catch(() => {
                expect(store.getActions()).toEqual([]);
            });
    });
});

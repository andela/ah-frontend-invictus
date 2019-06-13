import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { commentTypes } from '../../../redux/actions/types';
import { fetchComment, fetchComments } from '../../../redux/actions/FetchCommentAction';

jest.mock('react-toastify');
describe('Testing fetch comment success', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('Testing fetching action', () => {

    const expectedResponse ={
        "comments": [
            {
                "id": 6,
                "author": "edna1",
                "first_index": null,
                "last_index": null,
                "body": "His name was my name too.",
                "created_at": "2019-05-16T15:22:04.375891Z",
                "updated_at": "2019-05-16T15:51:01.228909Z",
                "likes_counter": 1,
                "highlighted_text": null,
                "article": 17
            },
            {
                "id": 7,
                "author": "edna1",
                "first_index": null,
                "last_index": null,
                "body": "His name was my name too.",
                "created_at": "2019-05-16T15:22:04.375891Z",
                "updated_at": "2019-05-16T15:51:01.228909Z",
                "likes_counter": 1,
                "highlighted_text": null,
                "article": 17
            }
        ]
    }
    const expectedActions = [
      {
        type: commentTypes.FETCH_COMMENTS,
        payload: [
            {
                "id": 6,
                "author": "edna1",
                "first_index": null,
                "last_index": null,
                "body": "His name was my name too.",
                "created_at": "2019-05-16T15:22:04.375891Z",
                "updated_at": "2019-05-16T15:51:01.228909Z",
                "likes_counter": 1,
                "highlighted_text": null,
                "article": 17
            },
            {
                "id": 7,
                "author": "edna1",
                "first_index": null,
                "last_index": null,
                "body": "His name was my name too.",
                "created_at": "2019-05-16T15:22:04.375891Z",
                "updated_at": "2019-05-16T15:51:01.228909Z",
                "likes_counter": 1,
                "highlighted_text": null,
                "article": 17
            }
        ]
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse
      });
    });
    const store = mockStore({});
    return store.dispatch(fetchComments()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

it('Testing fetching action', () => {

    const expectedResponse = "Comment not found";
    const expectedActions = [
      {
        type: "FAIL_FETCH_COMMENT",
        payload:  {
              "errors": "Comment not found.",
            }
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedResponse
      });
    });
    const store = mockStore({});
    return store.dispatch(fetchComments()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
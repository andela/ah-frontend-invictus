import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { commentTypes } from '../../../redux/actions/types';
import { postComment } from '../../../redux/actions/CommentAction';




jest.mock('react-toastify');
describe('Testing create comment success', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('Testing comment success', () => {

    const expectedResponse = {
      "message": "Comment successfully created.",
    }
    const expectedActions = [
      {
        type: "COMMENT_CREATE",
        payload: "Comment successfully created."
      }
    ];
    const commentData = {
      "comment": {
        "body": "comment"
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: expectedResponse
      });
    });
    const store = mockStore({});
    return store.dispatch(postComment(commentData)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
  // Testing failure
  it('Testing create comment failure', () => {
    const expectedResponse = {
      "errors": {
          "body": [
              "This field may not be blank."
          ]
      }
  }
    const expectedActions = [
       {
       "payload": "This field is required.",
       "type": "COMMENT_FAIL",
         }
       ];
    const commentingData = {
      "comment": {
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: expectedResponse
      });
    });
    const store = mockStore({});
    return store.dispatch(postComment(commentingData)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

});


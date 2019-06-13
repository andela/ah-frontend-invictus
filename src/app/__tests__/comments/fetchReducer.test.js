import { commentTypes } from '../../../redux/actions/types';
import FetchCommentReducer from '../../../redux/reducers/FetchCommentReducer';


describe('Testing fetching comments reducer', () => {
  it('testing fetching comment reducer', () => {
    const initialState = {
      comments: [],
      comment: {},
      errors: ""
    };
    const expectation = {
      comments:  [
           {
           "article": 17,
            "author": "edna1",
            "body": "His name was my name too.",
            "created_at": "2019-05-16T15:22:04.375891Z",
            "first_index": null,
            "highlighted_text": null,
             "id": 6,
            "last_index": null,
              "likes_counter": 1,
             "updated_at": "2019-05-16T15:51:01.228909Z",
            },
          ],
      comment: {},
      errors: ""
    }

    const action = {
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
        }
    ]
    }

    const newState = FetchCommentReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('testing fetching comment reducer fail', () => {
    const initialState = {
      comments: [],
      comment: {},
      errors: ""
    };
    const expectation = {
      comments:  [],
      comment: {},
      errors: "Comment not found"
    }

    const action = {
      type: commentTypes.FETCH_COMMENTS_FAIL,
      payload: "Comment not found"
    }

    const newState = FetchCommentReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });
});
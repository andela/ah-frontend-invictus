import { commentTypes } from '../../../redux/actions/types';
import CommentReducer from '../../../redux/reducers/CommentReducer';


describe('Testing creating comments reducer', () => {
    it('testing creating comment reducer', () => {
        const initialState =  {
            comments: [],
            comment: {},
            errors: ""
          };
        const expectation = {
            comments: "Comment successfully created.",
            comment: {},
            errors: ""
        }

        const action = {
            type: commentTypes.CREATE_COMMENTS,
            payload: "Comment successfully created."
        }

        const newState = CommentReducer(initialState, action);
        expect(newState).toEqual(expectation);
    });
    it('testing creating comment reducer', () => {
        const initialState =  {
            comments: [],
            comment: {},
            errors: ""
          };
        const expectation = {
            "comments": [],
             "errors": "Your session token has expired",
             "comment":  {}
        }

        const action = {
            type: commentTypes.CREATE_COMMENTS_FAIL,
            payload: "Comment successfully created."
        }

        const newState = CommentReducer(initialState, action);
        expect(newState).toEqual(expectation);
    })
});
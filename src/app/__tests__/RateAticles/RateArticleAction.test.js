import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from 'axios';
import { rateArticleAction } from "../../../redux/actions/RateArticleAction";
import { handleErrors } from "../../containers/rateArticleUtil";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe("ArticleRatingAction", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should successfully rate an article", () => {
    axios.post.mockResolvedValue({
      data: { message: "success success" }
    });
    return store.dispatch(rateArticleAction({ body: 'j' },3))
      .then(() => {
        expect(store.getActions()).toEqual([{
          "payload": {"message": "success success"},
        "type": "RATE_ARTICLE"}]);
      });
  });

  it("should handle errors", () => {
    handleErrors({});
    handleErrors({response: { data: { detail: 'request_error' } }});
    handleErrors({response: { data: { error: 'request_error' } }});
    handleErrors({response: { data: { error: 'Rating for article doesnot exists' } }});
  });
});

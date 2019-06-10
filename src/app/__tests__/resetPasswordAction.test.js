import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from 'axios';
import { resetPasswordRequestAction, resetPasswordAction, handleErrors } from "../../redux/actions/resetPasswordAction";
import { data, erro, erro2 } from '../mock_data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe("resetPasswordRequest Action", () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it("should make a password reset request successfully", () => {
    axios.post.mockResolvedValue({
      data: data.passRequest.success
    });
    return store.dispatch(resetPasswordRequestAction({ email: 'j' }))
      .then(() => {
        expect(store.getActions()).toEqual(data.passRequest.expect);
      });
  });

  it("should make a successfull password reset", () => {
    axios.post.mockResolvedValue({
      data: data.passRequest.success.user
    });
    return store.dispatch(resetPasswordAction({ token: 'j' }))
      .then(() => {
        expect(store.getActions()).toEqual(data.passRequest.expect);
      });
  });

  it("should handle errors", () => {
    axios.post.mockResolvedValue({
      response: data.passRequest.success.user
    });
    handleErrors(erro, store.dispatch);
    handleErrors(erro2, store.dispatch);
  });
});

import getArticleReducer from '../../../redux/reducers/getArticleReducer';
import { articleTypes } from '../../../redux/actions/types';

const initialState = {
  article: {}
};

const article = {};

describe('Article Reducer', () => {
  it('tests inititial state of article reducer', () => {
    const newState = getArticleReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('tests successful fetch of an articles', () => {
    const newState = getArticleReducer(initialState,
      {
        type: articleTypes.FETCH_ARTICLE,
        payload: article
      });
    expect(newState).toEqual({article});
  });
});

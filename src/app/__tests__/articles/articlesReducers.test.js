import ArticlesReducer from '../../../redux/reducers/ArticlesReducer';
import { articlesTypes } from '../../../redux/actions/types';

const initialState = {
  articles: []
};

const articles = [];

describe('Articles Reducer', () => {
  it('tests inititial state of articles reducer', () => {
    const newState = ArticlesReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('tests successful fetch of articles', () => {
    const newState = ArticlesReducer(initialState,
      {
        type: articlesTypes.FETCH_ARTICLES,
        payload: articles
      });
    expect(newState).toEqual({articles});
  });
});

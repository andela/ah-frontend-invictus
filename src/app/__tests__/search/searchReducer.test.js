import { searchTypes } from '../../../redux/actions/types';
import searchReducer from '../../../redux/reducers/Search';

const initialState = {
  Data: []
}
const articles = []

describe('searchReducer', () => {
  let newState;
  it('tests search reducer', () => {
    const newState = searchReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it ('tests successful fetch of results',()=>{
    newState = searchReducer(initialState,
      {
        type: searchTypes.RESULTS,
        Data: articles
      });
    expect(newState).toEqual({
      Data: undefined
    });
  });
})

import reducer from '../../redux/reducers/ArticleReducer';
import { articleTypes } from '../../redux/actions/types';

describe('Initial article reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ postedArticle: "", errors:"" });
  });
});

describe('on succesfull article creation', () => {
  let newState;
  const initialState = {
    postedArticle: "",
    errors: ""
  };
  it('should return an article', () => {
    const payload = {
      article: {
        article: {
          id: 35,
          title: "Eng gets his campus sweetheart",
          description: "There was lots of kikomando at breakfast",
          body: "There was a beautiful sunset.",
          slug: "eng-gets-his-campus-sweetheart",
          created_at: "2019-06-07T12:46:26.341846Z",
          updated_at: "2019-06-07T12:46:26.341884Z",
          likes_count: 0,
          dislikes_count: 0,
          favorited: false,
          favorite_count: 0,
          author: "marcus",
          tagList: [],
          read_time: "less than a minute read",
          social_links: {
            facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A//inviticus-staging.herokuapp.com/api/articles/35/retrieve/",
            twitter: "https://twitter.com/home?status=https%3A//inviticus-staging.herokuapp.com/api/articles/35/retrieve/",
            email: "mailto:?&subject=Authors%20Haven%3A%20Eng%20gets%20his%20campus%20sweetheart&body=Follow%20Link%20To%20View%20Article%20https%3A//inviticus-staging.herokuapp.com/api/articles/35/retrieve/"
          }
        }
      }
    };
    newState = reducer(undefined,
      {
        type: articleTypes.CREATE_ARTICLE_SUCCESS,
        payload:payload
      });
    expect(newState).toEqual({
      ...initialState,
      postedArticle:payload
    });
  });
});

describe('on failure to create article', () => {
  const initialState = {
    postedArticle: "",
    erros:""
  };
  const payload= "Your session token has expired";
  let newState;
  it('should fail to create an article', () => {
    newState = reducer(initialState,
      {
        type: articleTypes.CREATE_ARTICLE_FAIL,
        payload: payload
      });
    expect(newState).toEqual({
      ...initialState,
      errors: payload
    })
  });
});

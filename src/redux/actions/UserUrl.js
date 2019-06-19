export const userUrls = {
  USER_URL: 'https://inviticus-staging.herokuapp.com/api/profiles/'
};

export const followUrl = (userName) => (
  `https://inviticus-staging.herokuapp.com/api/profiles/${userName}/following/`
);

export const followUrls = (username) => (
  `https://inviticus-staging.herokuapp.com/api/profiles/${username}/follow/`
);

export const unfollowUrl = (username) => (
  `https://inviticus-staging.herokuapp.com/api/profiles/${username}/follow/`
);

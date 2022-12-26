const getIsLoggedIn = state => state.auth.getIsLoggedIn;
const getUserName = state => state.auth.user.name;
const isFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  isFetchingCurrentUser,
};

export default authSelectors;

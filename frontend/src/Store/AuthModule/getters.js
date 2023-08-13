export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  isAdmin(state) {
    return state.userRole === "Admin";
  },
  userName(state) {
    return state.userName;
  },
  tokenExpiration(state) {
    return state.tokenExpiration;
  },
};

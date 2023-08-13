export default {
  setUser(state, payload) {
    (state.token = payload.token),
      (state.userId = payload.userId),
      (state.userRole = payload.userRole);
    state.userName = payload.userName;
  },
  setTokenExpiration(state, timestamp) {
    state.tokenExpiration = timestamp;
  },
};

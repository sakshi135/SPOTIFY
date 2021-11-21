export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  //remove after finished developing...
  // token:
  //   "BQAK9taYlfbpMTbNmFK46LGEbiclGqOjcIwqn8Bs2_s1qwJtWQW9LZHbQwCRN7ZpemHAWWRs3NSlw_5_VzZVUpJmaVCF7hN_YreLA30KTGskraqhNc1iowMBarAoqNMQKmo0UbOu1HwhOK8cs2qzZ0x6EaOKGnM5J-UiV32c88nLFQ",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;

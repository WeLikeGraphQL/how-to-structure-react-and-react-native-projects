export const actionTypes = {
  PLAY_VIDEO: "@GRAPHAN/VIDEO_PLAY",
  STOP_VIDEO: "@GRAPHAN/VIDEO_STOP"
};

export const actionCreators = {
  playVideoAction: payload => ({
    type: actionTypes.PLAY_VIDEO,
    payload
  }),
  stopVideoAction: payload => ({
    type: actionTypes.STOP_VIDEO,
    payload
  })
};

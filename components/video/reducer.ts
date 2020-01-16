import { actionTypes } from './actions'

const initialState = {}

const stopAllVideos = (state = {}) => {
  return Object.keys(state).reduce((acc, key) => {
    acc[key] = 'stopped'
    return acc
  }, {})
}

function reducer(state = initialState, action) {
  const { payload } = action

  switch (action.type) {
    case actionTypes.PLAY_VIDEO:
      return {
        ...stopAllVideos(state),
        [payload]: 'playing'
      }
    case actionTypes.STOP_VIDEO:
      return {
        ...state,
        [payload]: 'stopped'
      }
    default:
      return state
  }
}

export default reducer

import { actionCreators } from '../actions'
import reducer from '../reducer'

let state = {}

test('1. Play 1st video', () => {
  state = reducer(state, actionCreators.playVideoAction('videoId1'))
  expect(state).toMatchSnapshot()
})

test('2. Play 2nd video', () => {
  state = reducer(state, actionCreators.playVideoAction('videoId2'))
  expect(state).toMatchSnapshot()
})

test('3. Play 3rd video', () => {
  state = reducer(state, actionCreators.playVideoAction('videoId3'))
  expect(state).toMatchSnapshot()
})

test('4. Play 1st video again', () => {
  state = reducer(state, actionCreators.playVideoAction('videoId1'))
  expect(state).toMatchSnapshot()
})

test('5. Stop 1st video', () => {
  state = reducer(state, actionCreators.stopVideoAction('videoId1'))
  expect(state).toMatchSnapshot()
})

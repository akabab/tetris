import { combineReducers } from 'redux';

/* Reducers */
import game from './game'
import square from './square'
import tetrominoes from './tetromino'

export default combineReducers({
  game,
  square,
  tetrominoes,
})

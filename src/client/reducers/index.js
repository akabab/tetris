import { combineReducers } from 'redux';

/* Reducers */
import game from './game'
import board from './board'
import tetrominoes from './tetromino'

export default combineReducers({
  game,
  board,
  tetrominoes,
})

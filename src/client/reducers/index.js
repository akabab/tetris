import { combineReducers } from 'redux';

/* Reducers */
import alert from './alert'
import square from './square'
import tetromino from './tetromino'

export default combineReducers({
  alert,
  square,
  tetromino,
})

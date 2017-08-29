import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'

import * as game from './game'

import store from './store' /* init store */
import './keys' /* Key handling */

//
import { patterns } from './tetrominoes'
import { addTetromino } from './actions/tetromino'

const patternsKeys = Object.keys(patterns)
document.newTetromino = () => {
  const p = patternsKeys[Math.floor(Math.random() * patternsKeys.length)]

  store.dispatch(addTetromino({
    patterns: patterns[p],
    currentPatternIndex: 0,
    x: 3,
    y: 0,
  }))
}
document.newTetromino()
//

game.loop()

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

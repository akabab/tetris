import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'

import * as game from './game'

import store from './store' /* init store */
import './keys' /* Key handling */
import './url' /* Url handling */

//
import { patterns } from './tetrominoes'
import { addTetromino } from './actions/tetromino'

const patternsKeys = Object.keys(patterns)
document.newTetromino = () => {
  const letter = patternsKeys[Math.floor(Math.random() * patternsKeys.length)]

  const t = {
    letter,
    patterns: patterns[letter],
    patternIndex: 0, // random?
    x: 3, // random
    y: 0,
  }

  store.dispatch(addTetromino(t))

  return t
}
document.newTetromino()
//

game.loop()

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

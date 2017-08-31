import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'

import * as game from './game'
import { addTetromino } from './actions/tetromino'

import store from './store' /* init store */
import './keys' /* Key handling */
import './url' /* Url handling */

store.dispatch(addTetromino())

game.loop()

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

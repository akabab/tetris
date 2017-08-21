import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { storeStateMiddleWare } from './middleware/storeStateMiddleWare'
import reducer from './reducers'
import App from './containers/app'

import { alert } from './actions/alert'

import keys from './keys'

const initialState = {}

/* Store */

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger())
)
document.store = store


/* Key handling */

keys(store)

//
import { patterns } from './tetrominoes'
import { addTetromino } from './actions/tetromino'

const action = {
  type: 'ADD_TETROMINO',
  pattern: patterns.Z,
  pos: { x: 3, y: 0 },
}

store.dispatch(addTetromino({
  pattern: patterns.Z,
  pos: { x: 3, y: 0 },
}))

store.dispatch(addTetromino({
  pattern: patterns.O,
  pos: { x: 2, y: 7 },
}))
//

/* Game loop */

const delay = 1000 // ms

document.lastDrop = Date.now()
document.paused = true
document.gameEnded = false

const loop = () => {
  const now = Date.now()
  const deltaTime = now - document.lastDrop

  if (!document.paused && deltaTime > delay) {
    store.dispatch({ type: 'MOVE_DOWN' })
    document.lastDrop = now;
  }

  if (!document.gameEnded) {
    requestAnimationFrame(loop)
  }

}

loop()


/* Render */

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))


//

store.dispatch(alert('Soon, will be here a fantastic Tetris ...'))

store.subscribe(() => { console.log('state:', store.getState()) })

// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
// import storeStateMiddleWare from './middleware/storeStateMiddleware'
import asyncDispatchMiddleware from './middleware/asyncDispatchMiddleware'

import reducer from './reducers'

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(asyncDispatchMiddleware)
  // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
)

export default store

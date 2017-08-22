// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
// import { storeStateMiddleWare } from './middleware/storeStateMiddleWare'
import reducer from './reducers'

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  // applyMiddleware(thunk, createLogger())
)

export default store

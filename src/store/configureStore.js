import { createStore, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './index'
import thunk from 'redux-thunk'

export const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(reduxImmutableStateInvariant())
}

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

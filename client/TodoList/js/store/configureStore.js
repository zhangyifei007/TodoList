import {
  applyMiddleware,
  createStore
} from 'redux'
import reudcers from '../reducer'

function configureStore() {
  const store = createStore(reudcers)

  return store
}

export default configureStore

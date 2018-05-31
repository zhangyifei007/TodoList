import Todo  from '../reducer/Todo'
import { combineReducers } from 'redux'

export default combineReducers({
  todo: Todo
})
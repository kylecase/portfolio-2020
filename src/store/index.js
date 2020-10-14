import { combineReducers } from 'redux'
import projects from './Projects/ProjectSlice'
const rootReducer = combineReducers({
  projects,
})

export default rootReducer

import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './filter'
import date from './dateFilter'

export default combineReducers({
  counter: counterReducer,
  articles,
  selected,
  date
})

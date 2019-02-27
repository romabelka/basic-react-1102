import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import generator from '../middlewares/generateUniqID'
import reducer from '../reducer'

const enhancer = applyMiddleware(logger, generator)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

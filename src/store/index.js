import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import reducer from '../reducer'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

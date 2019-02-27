import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import newId from '../middlewares/new-id'
import reducer from '../reducer'

const enhancer = applyMiddleware(logger, newId)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

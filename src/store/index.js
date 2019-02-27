import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import idGenerator from '../middlewares/id-generator'
import reducer from '../reducer'

const enhancer = applyMiddleware(logger, idGenerator)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

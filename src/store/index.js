import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import reducer from '../reducer'

const enhancer = applyMiddleware(randomId, logger)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

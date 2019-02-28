import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import reducer from '../reducer'

const enhancer = applyMiddleware(thunk, api, randomId, logger)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

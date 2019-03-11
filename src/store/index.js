import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import reducer from '../reducer'
import history from '../history'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), api, randomId, logger)

const store = createStore(reducer, enhancer)

export default store

//dev only
window.store = store

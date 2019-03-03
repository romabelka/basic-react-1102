import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  FAIL,
  LOAD_ARTICLE,
  LOAD_COMMENTS
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  loading: false,
  commentsIsLoaded: false,
  commentsLoading: false,
  comments: []
})

const ReducerState = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerState(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return state
        .updateIn(['entities', payload.articleId, 'comments'], (comments) =>
          comments.concat(randomId)
        )
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsIsLoaded'], true)

    case LOAD_ALL_ARTICLES + START:
      return state.set('loading', true)

    case LOAD_ALL_ARTICLES + FAIL:
      return state.set('error', error)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ARTICLE + START:
      return state.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return state.setIn(['entities', payload.id], new ArticleRecord(response))

    case LOAD_COMMENTS + START:
      return state.setIn(['entities', payload.articleId, 'commentsLoading'], true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsIsLoaded'], true)

    default:
      return state
  }
}

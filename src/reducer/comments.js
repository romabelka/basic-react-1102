import {
  ADD_COMMENT,
  LOAD_FIVE_COMMENTS,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { Record, OrderedMap, List } from 'immutable'
import { arrToMap, paginationArrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null,
  page: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  total: 0,
  pagesLoaded: List([])
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_FIVE_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_FIVE_COMMENTS + SUCCESS:
      return state
        .mergeIn(['entities'], paginationArrToMap(response.records, CommentRecord, payload.page))
        .set('loading', false)
        .set('loaded', true)
        .set('total', response.total)
        .update('pagesLoaded', (arr) => arr.push(payload.page))

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    default:
      return state
  }
}

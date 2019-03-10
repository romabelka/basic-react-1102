import { OrderedMap, Record } from 'immutable'
import { LOAD_COMMENTS, SUCCESS } from '../constants/index'

import { arrToMap } from './utils'

const ReducerState = Record({
  entities: new OrderedMap({}),
  itemsCount: 0,
  loading: false,
  loaded: false,
  error: null
})

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

export default (state = new ReducerState(), action) => {
  switch (action.type) {
    case LOAD_COMMENTS + SUCCESS:
      return state
        .setIn(
          ['entities', action.payload.page],
          action.response.records.map((item) => new CommentRecord(item))
        )
        .set('itemsCount', action.response.total)

    default:
      return state
  }
}

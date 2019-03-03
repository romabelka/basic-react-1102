import { Record, OrderedMap } from 'immutable'

import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const CommentsState = Record({
  entities: new OrderedMap({})
})

export default (state = new CommentsState(), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_COMMENTS + SUCCESS: {
      return state.mergeIn(['entities'], arrToMap(payload.response, CommentRecord))
    }

    default:
      return state
  }
}

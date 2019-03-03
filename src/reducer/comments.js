import { ADD_COMMENT, LOAD_ALL_COMMENTS, SUCCESS } from '../constants'
// import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: '',
  user: '',
  text: ''
})

const ReducerState = Record({
  entities: arrToMap([], CommentRecord),
  uploadStatus: false,
  error: null
})

export default (state = new ReducerState(), action) => {
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

    case LOAD_ALL_COMMENTS + SUCCESS:
      return state.set('entities', arrToMap(response, CommentRecord))

    default:
      return state
  }
}

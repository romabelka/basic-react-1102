import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      const { newId, comment } = payload
      return {
        ...commentsState,
        [newId]: {
          ...comment,
          id: newId
        }
      }

    default:
      return commentsState
  }
}

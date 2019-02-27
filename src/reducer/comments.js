import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { generatedId, payload, type } = action

  switch (type) {
    case ADD_COMMENT: {
      return {
        ...commentsState,
        [generatedId]: {
          id: generatedId,
          ...payload.comment
        }
      }
    }
    default:
      return commentsState
  }
}

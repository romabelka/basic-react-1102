import { normalizedComments } from '../fixtures'
import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload, random } = action
  switch (type) {
    case DELETE_ARTICLE: {
      const { comments = [] } = action.payload
      if (!comments.length) {
        return commentsState
      }
      const commentIds = Object.keys(commentsState).filter((id) => !comments.includes(id))
      const newObj = commentIds.reduce(
        (acc, commentId) => ({
          ...acc,
          [commentId]: commentsState[commentId]
        }),
        {}
      )
      return { ...newObj }
    }
    case ADD_COMMENT: {
      return Object.assign({ [random]: { id: random, ...payload.comment } }, commentsState)
    }
    default:
      return commentsState
  }
}

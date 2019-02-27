import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)
export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const copy = { ...articlesState }
      delete copy[payload.id]
      return copy
    case ADD_COMMENT:
      const { articleId, newId } = payload
      const article = articlesState[articleId]
      return {
        ...articlesState,
        [articleId]: {
          ...article,
          comments: [...(article.comments || []), newId]
        }
      }
    default:
      return articlesState
  }
}

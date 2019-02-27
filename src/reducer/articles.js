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
  const { generatedId, type, payload } = action

  switch (type) {
    case DELETE_ARTICLE: {
      const newArticles = { ...articlesState }
      delete newArticles[payload.id]
      return newArticles
    }

    case ADD_COMMENT: {
      const { articleId } = payload
      const targetArticle = articlesState[articleId]
      return {
        ...articlesState,
        [articleId]: {
          ...targetArticle,
          comments: [...(targetArticle.comments || []), generatedId]
        }
      }
    }

    default:
      return articlesState
  }
}

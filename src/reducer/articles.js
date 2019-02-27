import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { deleteArticleSelector } from '../selectors'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  return {
    ...acc,
    [article.id]: article
  }
}, {})

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return deleteArticleSelector(articlesState, payload.id)
    default:
      return articlesState
  }
}

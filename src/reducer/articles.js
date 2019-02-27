import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { deleteArticleSelector } from '../selectors'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  return {
    ...acc,
    [article.id]: article
  }
}, {})

export default (articlesState = defaultArticles, action) => {
  const { type, payload, random } = action

  switch (type) {
    case DELETE_ARTICLE:
      return deleteArticleSelector(articlesState, payload.id)

    case ADD_COMMENT:
      const {
        comment: { articleId }
      } = payload
      const comments = articlesState[articleId].comments.concat(random)
      const article = { ...articlesState[articleId], comments }
      return { ...articlesState, [articleId]: article }
    default:
      return articlesState
  }
}

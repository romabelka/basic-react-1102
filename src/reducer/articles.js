import articles from '../fixtures'
import { DELETE_ARTICLE, CHANGE_FILTER } from '../constants'

export default (articlesState = articles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case CHANGE_FILTER:
      const {
        dates: { from, to },
        articleIds
      } = action.filterConfig
      let res = articles
      if (articleIds.length > 0) {
        res = articles.filter((article) => articleIds.includes(article.id))
      }
      if (from) {
        res = res.filter(
          (article) =>
            new Date(from.toISOString().slice(0, 10)) <=
            new Date(new Date(article.date).toISOString().slice(0, 10))
        )
      }
      if (to) {
        res = res.filter(
          (article) =>
            new Date(to.toISOString().slice(0, 10)) >=
            new Date(new Date(article.date).toISOString().slice(0, 10))
        )
      }

      return res

    default:
      return articlesState
  }
}

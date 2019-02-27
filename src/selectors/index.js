import { createSelector } from 'reselect'

export const articlesSelectorMap = (state) => state.articles
export const articlesSelectorList = createSelector(
  articlesSelectorMap,
  (articles) => Object.values(articles)
)

export const selectedSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange

export const filtratedArticlesSelector = createSelector(
  articlesSelectorList,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length || selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

const commentsSelector = (state) => state.comments
const idSelector = (_, props) => props.id

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments[id]
  )

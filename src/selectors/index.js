import { createSelector } from 'reselect'

export const articlesSelector = (state) => state.articles
export const selectedSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange

export const filtratedArticlesSelector = createSelector(
  articlesSelector,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange
    return Object.values(articles)
      .filter((article) => {
        const published = Date.parse(article.date)
        return (
          (!selected.length || selected.find((selected) => selected.value === article.id)) &&
          (!from || !to || (published > from && published < to))
        )
      })
      .reduce((acc, article) => ({ ...acc, [article.id]: article }), {})
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

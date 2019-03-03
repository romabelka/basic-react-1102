import { createSelector } from 'reselect'

export const articleListSelector = (state) => state.articles.entities.valueSeq().toArray()
export const selectedSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
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

const commentsSelector = (state) => state.comments.entities
const idSelector = (_, props) => props.id

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => comments.get(id)
  )

export const articlesLoadingSelector = (state) => state.articles.loading

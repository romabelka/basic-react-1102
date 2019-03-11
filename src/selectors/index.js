import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articles) => articles.valueSeq().toArray()
)
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
export const articlesLoadedSelector = (state) => state.articles.loaded

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => articles.get(id)
)

export const totalCommentsSelector = (state) => state.comments.total
export const commentsPagenationSelector = (state) => state.comments.pagination
export const pageSelector = (_, props) => props.page
export const commentsPageIdsSelector = createSelector(
  commentsPagenationSelector,
  pageSelector,
  (pagination, page) => pagination.getIn([page, 'ids'])
)
export const commentsPageLoadingSelector = createSelector(
  commentsPagenationSelector,
  pageSelector,
  (pagination, page) => pagination.getIn([page, 'loading'])
)

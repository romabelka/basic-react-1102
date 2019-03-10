import { createSelector } from 'reselect'

const pageSelector = (_, props) => +props.page
export const commentsByPageCommonSelector = (state) => state.allComments.entities
export const itemsCountSelector = (state) => state.allComments.itemsCount

export const commentsByPageSelector = createSelector(
  commentsByPageCommonSelector,
  pageSelector,
  (commentsByPage, page) => commentsByPage.get(page)
)

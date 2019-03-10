import { createSelector } from 'reselect'

const pageSelector = (_, props) => +props.page
export const commentsByPageCommonSelector = (state) => state.allComments.entities
export const itemsCountSelector = (state) => state.allComments.itemsCount

export const commentsByPageSelector = createSelector(
  commentsByPageCommonSelector,
  pageSelector,
  (commentsByPage, page) => {
    console.log(commentsByPage)
    console.log(page)
    return commentsByPage.get(page)
  }
)

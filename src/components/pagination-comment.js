import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadFiveComments } from '../ac'
import {
  commentsLoadedSelector,
  commentsLoadingSelector,
  commentsPagesLoadedSelector,
  commentsSelector
} from '../selectors'
import Loader from './common/loader'
import Comment from './comment'

const DEFAULT_OFFSET = 5

const PaginationComment = (props) => {
  const { comments, loading, page } = props
  useCheckAndFetch(props)

  if (loading) return <Loader />
  const [...commentIds] = comments.filter((comment) => comment.page === page).keys()
  console.log(comments)
  if (!commentIds.length) return <p>No comments</p>
  const commentList = (
    <ul>
      {commentIds.map((id) => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  )

  return <div>{commentList}</div>
}

const useCheckAndFetch = (props) => {
  const { loading, fetchAll, page, pagesLoaded } = props
  useEffect(() => {
    if (!loading && !pagesLoaded.includes(page) && fetchAll) {
      fetchAll(DEFAULT_OFFSET * (page - 1), page)
    }
  }, [page])
}

export default connect(
  (state) => ({
    comments: commentsSelector(state),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state),
    pagesLoaded: commentsPagesLoadedSelector(state)
  }),
  { fetchAll: loadFiveComments }
)(PaginationComment)

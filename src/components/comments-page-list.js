import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../ac/index'

import { commentsByPageSelector } from '../selectors/comments'

function CommentsPageList(props) {
  useCheckAndFetch(props)

  const { items } = props

  if (!items) {
    return null
  }

  return items.map((model) => {
    return (
      <p>
        {model.text} <br />
        <b>by {model.user}</b>
      </p>
    )
  })
}

function useCheckAndFetch(props) {
  useEffect(() => {
    const { items, page, loadComments } = props
    if (!items) {
      loadComments(page)
    }
  }, [props.page])
}

function mapStateToProps(state, ownProps) {
  return {
    items: commentsByPageSelector(state, ownProps)
  }
}

export default connect(
  mapStateToProps,
  { loadComments }
)(CommentsPageList)

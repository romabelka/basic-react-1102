import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'

function Comment({ comment }) {
  console.log(comment)

  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string
  })
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, props) => ({
    comment: commentSelector(state, props)
  })
}

export default connect(createMapStateToProps)(Comment)

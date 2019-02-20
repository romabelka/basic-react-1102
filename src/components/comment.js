import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div className="test--comment__body">
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

export default Comment

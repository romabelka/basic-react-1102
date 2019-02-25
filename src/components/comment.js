import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentSelector } from '../selectors'

function Comment({ comment }) {
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

export default connect((state, props) => ({
  comment: commentSelector(state, props)
}))(Comment)

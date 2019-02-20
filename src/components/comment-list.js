import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul ref={this.setListRef}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }

  setListRef = (ref) => {
    this.list = ref
  }
}

CommentList.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ),
  isOpen: PropTypes.bool
}

CommentList.defaultProps = {
  comments: [],
  isOpen: false
}

export default toggleOpen(CommentList)

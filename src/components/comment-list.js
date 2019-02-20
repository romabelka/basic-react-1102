import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'
import CommentForm from './comment-form'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  static defaultProps = {
    comments: [],
    isOpen: false
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.getBody()}
        {this.commentForm()}
      </div>
    )
  }

  commentForm() {
    return this.props.isOpen ? <CommentForm /> : null
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
/*

CommentList.propTypes = {
  comments: PropTypes.array
}
*/

export default toggleOpen(CommentList)

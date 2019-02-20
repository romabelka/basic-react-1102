import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button className="test--toggle_comments__btn" onClick={toggleOpen}>
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
        <ul ref={this.setListRef} className="test--comments_list">
          {comments.map((comment) => (
            <li key={comment.id} className="test--comments_item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="test--comments_empty-label">No comments yet</h3>
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

import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props
    const commentList = !comments
      ? []
      : comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))

    return <div>{commentList.length ? <ul>{commentList}</ul> : 'no comments'}</div>
  }
}

export default CommentList

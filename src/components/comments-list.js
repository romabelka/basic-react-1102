import React from 'react'
import Comment from './comment'

export default class CommentList extends React.Component {
  state = {
    isOpened: false
  }
  render() {
    const { comments, isOpened } = this.props
    const commentItems =
      comments &&
      isOpened &&
      comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    return <ul>{commentItems}</ul>
  }
}

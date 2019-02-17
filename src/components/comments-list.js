import React, { Component } from 'react'
import Comment from './comment'

class CommentsList extends Component {
  render() {
    const { collection } = this.props

    const commentItems = collection.map((comment) => (
      <li key={comment.id}>
        <Comment model={comment} />
      </li>
    ))

    return (
      <div style={{ marginTop: '20px' }}>
        <h2>Comments: </h2>
        <ul>{commentItems}</ul>
      </div>
    )
  }
}

export default CommentsList

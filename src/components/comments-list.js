import React, { Component } from 'react'
import Comment from './comment'
import toggle from '../decorators/toggle'

class CommentsList extends Component {
  render() {
    const { collection, isOpen, onToggle } = this.props

    const commentItems = collection.map((comment) => (
      <li key={comment.id}>
        <Comment model={comment} />
      </li>
    ))

    return (
      <div style={{ marginTop: '20px' }}>
        <h2>Comments: </h2>
        <button onClick={onToggle}>{isOpen ? 'Close' : 'Open'}</button>
        {isOpen ? <ul>{commentItems}</ul> : null}
      </div>
    )
  }
}

export default toggle(CommentsList)

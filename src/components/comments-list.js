import React, { Component } from 'react'
import Comment from './comment'
import ToggleComponent from './toggle-component'

class CommentsList extends ToggleComponent {
  render() {
    const { collection } = this.props
    const { isOpen } = this.state

    const commentItems = collection.map((comment) => (
      <li key={comment.id}>
        <Comment model={comment} />
      </li>
    ))

    return (
      <div style={{ marginTop: '20px' }}>
        <h2>Comments: </h2>
        <button onClick={this.toggle()}>{this.toggleButtonLabel()}</button>
        {isOpen ? <ul>{commentItems}</ul> : null}
      </div>
    )
  }
}

export default CommentsList

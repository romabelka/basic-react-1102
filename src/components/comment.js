import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { comment } = this.props

    return (
      <p>
        <b>{comment.user}</b>
        <br />
        <span>{comment.text}</span>
      </p>
    )
  }
}

export default Comment

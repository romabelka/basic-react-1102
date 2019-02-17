import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { model } = this.props

    return (
      <div>
        <b>{model.user}</b>
        <p>{model.text}</p>
      </div>
    )
  }
}

export default Comment

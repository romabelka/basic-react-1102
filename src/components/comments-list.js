import React, { Component } from 'react'
import Comment from './comment'

class CommentsList extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div style={{ marginTop: '20px', marginLeft: '50px' }}>
        <h2>Comments: </h2>
        {this.renderComments()}
      </div>
    )
  }

  renderComments() {
    const { collection } = this.props
    const { isOpen } = this.state

    if (collection.length === 0) {
      return <span>No comments</span>
    }

    const commentItems = collection.map((comment) => (
      <li key={comment.id}>
        <Comment model={comment} />
      </li>
    ))

    return (
      <>
        <button onClick={this.onToggleBtnClick.bind(this)}>{isOpen ? 'Close' : 'Show'}</button>
        {isOpen ? <ul>{commentItems}</ul> : null}
      </>
    )
  }

  onToggleBtnClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default CommentsList

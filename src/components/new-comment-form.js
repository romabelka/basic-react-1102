import React, { Component } from 'react'

class NewCommentForm extends Component {
  state = {
    comment: '',
    username: ''
  }

  render() {
    return (
      <div>
        <p>
          Comment: <textarea value={this.state.comment} onChange={this.commentChangeHandler} />
        </p>
        <p>
          Username: <input value={this.state.username} onChange={this.usernameChangeHandler} />
        </p>
        <p>
          <button
            onClick={this.postComment}
            disabled={this.state.comment && this.state.username ? null : 'disabled'}
          >
            Post comment
          </button>
        </p>
      </div>
    )
  }

  postComment = () => {
    console.log('sumbit')
  }

  commentChangeHandler = (evt) => {
    this.setState({ comment: evt.target.value })
  }

  usernameChangeHandler = (evt) => {
    this.setState({ username: evt.target.value })
  }
}

export default NewCommentForm

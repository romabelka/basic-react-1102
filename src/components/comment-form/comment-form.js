import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    username: '',
    text: '',
    usernameError: null,
    textError: null
  }

  render() {
    const { username, text, usernameError, textError } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>New comment</h3>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" value={username} onChange={this.handleChangeUsername} />
          {usernameError ? <span>{usernameError}</span> : null}
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <textarea id="text" value={text} onChange={this.handleChangeText} />
          {textError ? <span>{textError}</span> : null}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }

  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleChangeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let hasError = false

    if (this.state.username.trim().length === 0) {
      this.setState({
        usernameError: 'Invalid name'
      })
      hasError = true
    } else {
      this.setState({
        usernameError: null
      })
    }

    if (this.state.text.trim().length === 0) {
      this.setState({
        textError: 'Invalid text'
      })
      hasError = true
    } else {
      this.setState({
        textError: null
      })
    }

    if (hasError === false) {
      this.setState({
        username: '',
        text: ''
      })
      alert('Submit success')
    }
  }
}

export default CommentForm

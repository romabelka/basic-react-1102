import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class CommentForm extends Component {
  static propTypes = {
    username: PropTypes.string
  }
  static defaultProps = {
    username: ''
  }

  initState = (username) => {
    return {
      username,
      text: '',
      isValidName: !!this.isNameValid(username),
      isValidText: false
    }
  }

  isNameValid = (name) => name.length < 5
  isTextValid = (text) => text.length < 10 && text.length % 2 === 1

  state = this.initState(this.props.username)

  render() {
    const { username, isValidName, isValidText, text } = this.state

    console.log(this.state)
    const nameBorderColor = isValidName ? 'green' : 'red'
    const textBorderColor = isValidText ? 'green' : 'red'
    const buttonEnabled = isValidText && isValidName
    return (
      <div>
        <p>comment form</p>
        <p>Your name validation({this.isNameValid.toString()})</p>
        <input value={username} className={nameBorderColor} onChange={this.onUsernameChange} />
        <p>Your comment validation({this.isTextValid.toString()}) </p>
        <textarea onChange={this.onTextChange} value={text} className={textBorderColor}>
          {' '}
        </textarea>
        <button onClick={this.onCompleteForm} disabled={!buttonEnabled}>
          Send
        </button>
      </div>
    )
  }

  onCompleteForm = () => {
    console.log(this.state)
  }
  onTextChange = (ev) => {
    const text = ev.target.value
    this.setState({
      text,
      isValidText: this.isTextValid(text)
    })
  }

  onUsernameChange = (ev) => {
    const username = ev.target.value

    this.setState({
      username,
      isValidName: this.isNameValid(username)
    })
  }
}

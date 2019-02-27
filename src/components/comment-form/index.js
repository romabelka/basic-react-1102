import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addComment } from '../../ac/index'

import './style.css'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    addCommentToArticle: PropTypes.func.isRequired
  }

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        user:{' '}
        <input
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={this.getClassName('user')}
        />
        comment:{' '}
        <input
          value={this.state.text}
          onChange={this.handleChange('text')}
          className={this.getClassName('text')}
        />
        <input type="submit" value="submit" disabled={!this.isValidForm()} />
      </form>
    )
  }

  handleSubmit = (ev) => {
    const { addCommentToArticle, articleId } = this.props
    const { text, user } = this.state

    ev.preventDefault()
    addCommentToArticle({
      articleId,
      comment: {
        text,
        user
      }
    })

    this.setState({
      user: '',
      text: ''
    })
  }

  isValidForm = () => ['user', 'text'].every(this.isValidField)

  isValidField = (type) => this.state[type].length >= limits[type].min

  getClassName = (type) => (this.isValidField(type) ? '' : 'form-input__error')

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }
}

const limits = {
  user: {
    min: 10,
    max: 50
  },
  text: {
    min: 10,
    max: 50
  }
}

export default connect(
  null,
  {
    addCommentToArticle: addComment
  }
)(CommentForm)

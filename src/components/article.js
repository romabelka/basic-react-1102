import React, { Component } from 'react'
import CommentList from './comments-list'

class Article extends Component {
  state = {
    commentsOpened: false
  }

  render() {
    const { article, onBtnClick, isOpen } = this.props
    const btnText = isOpen ? 'close' : 'open'

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={onBtnClick}>{btnText}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    function onBtnCommentsClick() {
      this.setState({ commentsOpened: !this.state.commentsOpened })
    }

    const { isOpen, article } = this.props
    if (!isOpen) return null
    const commentsButtonCaption = this.state.commentsOpened ? 'Collaps' : 'Expand'
    return (
      <div>
        <section>{article.text}</section>
        <h3>
          Comments:
          <button onClick={onBtnCommentsClick.bind(this)}>{commentsButtonCaption}</button>
        </h3>
        <CommentList comments={article.comments} isOpened={this.state.commentsOpened} />
      </div>
    )
  }
}

export default Article

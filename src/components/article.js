import React, { Component } from 'react'
import CommentList from './comments-list'

class Article extends Component {
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
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return (
      <div>
        <section>{article.text}</section>
        <h3>Comments:</h3>
        <CommentList comments={article.comments} />
      </div>
    )
  }
}

export default Article

import React, { Component } from 'react'
import CommentList from './comment-list'

class Article extends Component {
  render() {
    const { article, isOpen, onBtnClick } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={onBtnClick} className="test__article--btn">
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

export default Article

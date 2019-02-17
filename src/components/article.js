import React, { Component } from 'react'
import CommentList from './comment-list'

class Article extends Component {
  render() {
    const { article, onBtnClick, isOpen } = this.props
    const btnText = isOpen ? 'close' : 'open'
    // const { openList, toggleOpenList} = useOpenList()

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
      <section>
        {article.text}
        {article.comments ? <CommentList comments={article.comments} /> : ''}
      </section>
    )
  }
}

export default Article

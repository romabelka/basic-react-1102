import React, { Component } from 'react'
import CommentList from './comment-list'

class Article extends Component {
  state = { commentsIsOpen: false }

  render() {
    const { article, onBtnClick, isOpen } = this.props
    const btnText = isOpen ? 'close' : 'open'

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={onBtnClick}>{btnText}</button>
        {this.getBody()}
        {this.getCommentBlock()}
      </div>
    )
  }

  commentBtnOnClick = () => {
    this.setState({
      commentsIsOpen: !this.state.commentsIsOpen
    })
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    return <section>{article.text}</section>
  }

  getCommentBlock() {
    const { isOpen, article } = this.props
    const commentCount = article.comments ? article.comments.length : 0
    if (!isOpen || !commentCount) return <div>comments: {commentCount}</div>
    const commentsBtnText = this.state.commentsIsOpen ? 'hide' : 'show'
    const commentList = this.state.commentsIsOpen ? <CommentList comments={article.comments} /> : ''
    return (
      <div>
        <br />
        comments: {commentCount}
        <button onClick={this.commentBtnOnClick}>{commentsBtnText}</button>
        {commentList}
      </div>
    )
  }
}

export default Article

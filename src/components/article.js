import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './comment-list'
import { deleteArticle } from '../ac'

class Article extends Component {
  render() {
    const { article, isOpen, onBtnClick } = this.props
    const date = new Date(article.date).toDateString()
    return (
      <div>
        <h3>{article.title}</h3>
        <p>{date}</p>
        <button onClick={onBtnClick} className="test__article--btn">
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDeleteClick}>delete me</button>
        {this.getBody()}
      </div>
    )
  }

  handleDeleteClick = () => {
    this.props.deleteArticle(this.props.article.id)
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

export default connect(
  null,
  { deleteArticle }
)(Article)

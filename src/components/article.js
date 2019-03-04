import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './comment-list'
import { deleteArticle, loadArticle } from '../ac'
import Loader from './common/loader'
import { articleSelector } from '../selectors'

class Article extends Component {
  componentDidUpdate(prevProps) {
    const { id, article, loadArticle } = this.props
    if (!article || !(article.text && !article.loading)) {
      loadArticle(id)
    }
  }

  render() {
    const { article, isOpen, onBtnClick } = this.props
    if (!article) return null
    return (
      <div>
        <h3>{article.title}</h3>
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
    if (article.loading) return <Loader />

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList article={article} />
      </section>
    )
  }
}

export default connect(
  (state, props) => ({
    article: articleSelector(state, props)
  }),
  { deleteArticle, loadArticle }
)(Article)

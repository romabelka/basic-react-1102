import React, { Component } from 'react'
import CommentList from './comment-list'
import PropTypes from 'prop-types'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }),
    isOpen: PropTypes.bool,
    onBtnClick: PropTypes.func
  }

  render() {
    const { article, isOpen, onBtnClick } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={onBtnClick} className="test--article__btn">
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
      <section className="test--article__body">
        {article.text}
        <CommentList comments={article.comments} ref={this.setCommentsRef} />
      </section>
    )
  }

  setCommentsRef = (ref) => {}
}

export default Article

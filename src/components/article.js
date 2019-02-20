import React, { Component } from 'react'
// import { findDOMNode } from 'react-dom'
import CommentList from './comment-list'
import PropTypes from 'prop-types'

class Article extends Component {
  /*
    componentDidCatch(error) {
        console.log('---', error)
    }

*/
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

  setCommentsRef = (ref) => {
    //      window.comments = ref
    //    console.log('---', 'comments', ref)
    //    console.log('---', 'comments DOM', findDOMNode(ref))
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  onBtnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
}

Article.defaultProps = {
  isOpen: false
}

export default Article

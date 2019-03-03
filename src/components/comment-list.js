import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'
import CommentForm from './comment-form'
import Loader from './common/loader'
import { loadComments } from '../ac'

export class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
  */
  componentDidUpdate() {
    const { article, loadArticleComments } = this.props
    if (
      article &&
      article.comments.length &&
      !article.commentsIsLoaded &&
      !article.commentsLoading
    ) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {
      article: { comments, id, commentsLoading, commentsIsLoaded },
      isOpen
    } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length && commentsIsLoaded ? (
        <ul ref={this.setListRef}>
          {comments.map((id) => (
            <li key={id} className="test__comment-list--item">
              <Comment id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="test__comment-list--empty">No comments yet</h3>
      )

    if (commentsLoading) {
      return <Loader />
    }

    return (
      <div className="test__comment-list--body">
        {body}
        <CommentForm articleId={id} />
      </div>
    )
  }

  setListRef = (ref) => {
    this.list = ref
  }
}
/*

CommentList.propTypes = {
  comments: PropTypes.array
}
*/

export default connect(
  null,
  { loadArticleComments: loadComments }
)(toggleOpen(CommentList))

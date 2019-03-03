import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggle-open'
import CommentForm from './comment-form'
import { loadArticleComments } from '../ac'
import { connect } from 'react-redux'

export class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }
  componentDidMount() {
    const { loadAllComments } = this.props
    loadAllComments && loadAllComments(this.props.article.id)
  }
  /*
  static defaultProps = {
    comments: []
  }
*/

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
      article: { comments, id },
      isOpen
    } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
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
  { loadAllComments: loadArticleComments }
)(toggleOpen(CommentList))

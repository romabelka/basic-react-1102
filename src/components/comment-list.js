import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import CommentForm from './comment-form'
import toggleOpen from '../decorators/toggle-open'
import { connect } from 'react-redux'
import { loadArticleComments } from '../ac'
import Loader from './common/loader'
import { Consumer as UserConsumer } from '../contexts/user-context'
import i18n from './i18n'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props
    if (isOpen && !oldProps.isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpen, t } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {t(text)}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen,
      t
    } = this.props
    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    const body = comments.length ? (
      <ul className="test__comment-list--body">
        {comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test__comment-list--empty">{t('No comments yet')}</h3>
    )

    return (
      <div className="test__comment-list--body">
        {body}
        {/*
        <UserConsumer children={(username) => <h3>{username}</h3>}/>
*/}
        <UserConsumer>{(username) => <h3>{username}</h3>}</UserConsumer>
        <CommentForm articleId={id} />
      </div>
    )
  }
}
export default i18n(
  connect(
    null,
    { loadArticleComments }
  )(toggleOpen(CommentList))
)

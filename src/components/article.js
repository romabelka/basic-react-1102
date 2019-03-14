import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CommentList from './comment-list'
import { deleteArticle, loadArticle } from '../ac'
import Loader from './common/loader'
import { articleSelector } from '../selectors'

function Article(props) {
  useCheckAndFetch(props)

  const { article, isOpen, onBtnClick, deleteArticle } = props
  if (!article) return null
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick} className="test__article--btn">
        {isOpen ? 'close' : 'open'}
      </button>
      <button onClick={deleteArticle}>delete me</button>
      {getBody(props)}
    </div>
  )
}

function useCheckAndFetch(props) {
  useEffect(() => {
    const { id, article, loadArticle } = props
    if (!article || !(article.text && !article.loading)) {
      loadArticle(id)
    }

    //    return () => unsubscribe(id)
  }, [props.id, props.article])
}

function getBody(props) {
  const { isOpen, article } = props
  if (!isOpen) return null
  if (article.loading) return <Loader />

  return (
    <section className="test__article--body">
      {article.text}
      <CommentList article={article} />
    </section>
  )
}

export default connect(
  (state, props) => ({
    article: articleSelector(state, props)
  }),
  (dispatch, props) => ({
    deleteArticle: () => deleteArticle(props.article.id),
    loadArticle: (...args) => dispatch(loadArticle(...args))
  })
)(Article)

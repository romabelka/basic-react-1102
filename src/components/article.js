import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CommentList from './comment-list'
import { deleteArticle, loadArticle } from '../ac'
import Loader from './common/loader'
import { articleSelector } from '../selectors'
import i18n from './i18n'

function Article(props) {
  useCheckAndFetch(props)

  const { article, deleteArticle, t } = props
  if (!article) return null
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={deleteArticle}>{t('delete me')}</button>
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
  }, [props.id])
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

export default i18n(
  connect(
    (state, props) => ({
      article: articleSelector(state, props)
    }),
    (dispatch, props) => ({
      deleteArticle: () => deleteArticle(props.article.id),
      loadArticle: (...args) => dispatch(loadArticle(...args))
    })
  )(Article)
)

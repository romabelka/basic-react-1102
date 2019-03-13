import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import { articlesLoadedSelector } from '../../selectors/index'

function ArticlesRoute({ loadedArticles }) {
  return (
    <div>
      <ArticleList />
      {loadedArticles && <Route path="/articles/:id" children={getArticle} />}
    </div>
  )
}

const getArticle = ({ match }) =>
  match ? <Article id={match.params.id} isOpen /> : <h1>Select an article</h1>

ArticlesRoute.propTypes = {}

function mapStateToProps(state) {
  return {
    loadedArticles: articlesLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(ArticlesRoute)

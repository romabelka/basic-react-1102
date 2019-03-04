import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

function ArticlesRoute() {
  return (
    <div>
      <ArticleList />
      <Route path="/articles/:id" children={getArticle} />
    </div>
  )
}

const getArticle = ({ match }) =>
  match ? <Article id={match.params.id} isOpen /> : <h1>Select an article</h1>

ArticlesRoute.propTypes = {}

export default ArticlesRoute

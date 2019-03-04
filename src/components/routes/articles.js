import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

function ArticlesRoute() {
  return (
    <div>
      <ArticleList />
      <Route path="/articles/:id" render={getArticle} />
    </div>
  )
}

const getArticle = ({ match }) => {
  const { id } = match.params
  return <Article id={id} isOpen key={id} />
}

ArticlesRoute.propTypes = {}

export default ArticlesRoute

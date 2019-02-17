import ArticleList from './components/article-list'
import React from 'react'
import articles from './fixtures'

export default function App() {
  return (
    <div>
      <h1>Article App</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

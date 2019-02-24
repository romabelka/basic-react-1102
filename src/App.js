import React, { Component } from 'react'
import ArticleList from './components/article-list'
import Filters from './components/filters'
import UserForm from './components/user-form'
import Counter from './components/counter'
import articles from './fixtures'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Article App</h1>
        <UserForm />
        <Counter />
        <Filters articles={articles} />
        <ArticleList />
      </div>
    )
  }
}

export default App

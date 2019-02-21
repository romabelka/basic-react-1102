import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import Filters from './components/filters'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Article App</h1>
        <UserForm />
        <Counter />
        <Chart articles={articles} />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserDate from './components/user-date'
import articles from './fixtures'

class App extends Component {
  state = {
    selected: null
  }

  handleChange = (selected) => this.setState({ selected })

  render() {
    return (
      <div>
        <h1>Article App</h1>
        <UserDate />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Select from 'react-select'
import ArticleList from './components/article-list'
import UserDate from './components/user-date'
import UserForm from './components/user-form'
import articles from './fixtures'

class App extends Component {
  state = {
    selected: null
  }

  handleChange = (selected) => this.setState({ selected })

  getUserState = (state) => {
    console.log('---', state)
  }

  render() {
    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))

    return (
      <div>
        <h1>Article App</h1>
        <UserForm onStateChange={this.getUserState} />

        <UserDate />

        <Select options={options} value={this.state.selected} onChange={this.handleChange} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

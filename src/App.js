import React, { Component } from 'react'
import Select from 'react-select'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import articles from './fixtures'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
  state = {
    selected: null,
    from: null,
    to: null
  }

  handleChange = (selected) => this.setState({ selected })

  getUserState = (state) => {
    console.log('---', state)
  }

  handleDayClick = (day) => {
    const { from, to } = this.state
    const range = DateUtils.addDayToRange(day, { from, to })
    this.setState(range)
  }

  render() {
    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))

    const { from, to } = this.state
    return (
      <div>
        <h1>Article App</h1>
        <UserForm onStateChange={this.getUserState} />
        <Select options={options} value={this.state.selected} onChange={this.handleChange} />
        <DayPicker selectedDays={[from, { from, to }]} onDayClick={this.handleDayClick} />
        <p>
          {from && from.toLocaleDateString()} - {to && to.toLocaleDateString()}{' '}
        </p>
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

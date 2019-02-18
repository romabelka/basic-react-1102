import React, { Component } from 'react'
// import Select from 'react-select'
// import ArticleList from './components/article-list'
// import UserForm from './components/user-form'
// import articles from './fixtures'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
  state = {
    from: '',
    to: ''
  }
  handleResetClick = () => {
    this.setState({
      from: '',
      to: ''
    })
  }
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <h1>React Day Picker</h1>
        <p>
          {from && to ? (
            <button onClick={this.handleResetClick}>Reset range</button>
          ) : (
            'You should to choose a range'
          )}
        </p>
        <DayPicker
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}

export default App

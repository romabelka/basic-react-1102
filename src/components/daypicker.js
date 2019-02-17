import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import Helmet from 'react-helmet'
import 'react-day-picker/lib/style.css'

export default class AppDayPicker extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      from: undefined,
      to: undefined
    }
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    console.log(range)
    this.setState(range)
  }
  handleResetClick = () => {
    this.setState(this.getInitialState)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <DayPicker
          className="Selectable"
          onDayClick={this.handleDayClick}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          numberOfMonths={this.props.numberOfMonths}
        />
        <p>
          <button onClick={this.handleResetClick}>Reset</button>
        </p>
        {this.state.to && this.state.from ? (
          <p>
            You selected {this.state.from.toLocaleDateString()} to{' '}
            {this.state.to.toLocaleDateString()}
          </p>
        ) : (
          <p>Please select a day range</p>
        )}
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    )
  }
}

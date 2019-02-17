import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class ExtendedDayPicker extends Component {
  state = {
    start_date: '',
    end_date: ''
  }

  handleDayClick = (day) => {
    if (!this.state.start_date) {
      this.setState({ start_date: day, end_date: day })
    } else {
      if (this.state.start_date > day) {
        this.setState({ start_date: day, end_date: this.state.end_date })
      }
      if (this.state.start_date < day) {
        if (this.state.end_date > day) {
          this.setState({ start_date: day, end_date: this.state.end_date })
        }
        if (this.state.end_date < day) {
          this.setState({ start_date: this.state.start_date, end_date: day })
        }
      }
    }
  }

  getFormatedPeriod = () => {
    const st_dt =
      this.state.start_date && new Date(this.state.start_date).toISOString().slice(0, 10)
    const en_dt = this.state.end_date && new Date(this.state.end_date).toISOString().slice(0, 10)
    return st_dt && en_dt ? st_dt + ' - ' + en_dt : ''
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.getFormatedPeriod()} readOnly />
        </div>
        <div>
          <DayPicker onDayClick={this.handleDayClick} />
        </div>
      </div>
    )
  }
}

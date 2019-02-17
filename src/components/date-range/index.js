import React, { Component } from 'react'
import 'react-day-picker/lib/style.css'
import CalendarInput from './calendar-input'

import './style.css'

class DateRange extends Component {
  state = {
    dateStart: null,
    dateEnd: null
  }

  render() {
    const { dateStart, dateEnd } = this.state

    return (
      <div className="date-range">
        <div className="date-range__inputs">
          <div className="date-range__input">
            <CalendarInput
              placeholder="From"
              value={dateStart}
              onDayChange={this.handleChangeDateStart.bind(this)}
              disabledDays={dateEnd ? { after: dateEnd } : null}
            />
          </div>
          <div className="date-range__input">
            <CalendarInput
              placeholder="To"
              value={dateEnd}
              onDayChange={this.handleChangeDateEnd.bind(this)}
              disabledDays={dateStart ? { before: dateStart } : null}
            />
          </div>
        </div>
        <div className="date-range__value">
          Selected: {this.renderDateString(dateStart)} - {this.renderDateString(dateEnd)}
        </div>
      </div>
    )
  }

  renderDateString(date) {
    if (!date) {
      return ''
    }

    return date.toDateString()
  }

  handleChangeDateStart(value) {
    this.setState({
      dateStart: value
    })
  }

  handleChangeDateEnd(value) {
    this.setState({
      dateEnd: value
    })
  }
}

export default DateRange

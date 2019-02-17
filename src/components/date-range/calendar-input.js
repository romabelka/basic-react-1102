import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'

class CalendarInput extends Component {
  render() {
    return (
      <DayPickerInput
        {...this.props}
        dayPickerProps={{
          disabledDays: this.props.disabledDays
        }}
        format="LL"
        formatDate={formatDate}
        parseDate={parseDate}
      />
    )
  }
}

export default CalendarInput

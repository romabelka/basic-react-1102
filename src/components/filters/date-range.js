import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { dateFilter } from '../../ac'

import 'react-day-picker/lib/style.css'

function DateRange({ date, dateFilter }) {
  const { from, to } = date
  const handleDayClick = (day) => dateFilter(DateUtils.addDayToRange(day, date))
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={handleDayClick}
      />
      {selectedRange}
    </div>
  )
}

const mapStateToProps = (storeState) => {
  return {
    date: storeState.date
  }
}

const mapDispatchToProps = {
  dateFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)

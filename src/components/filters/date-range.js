import React from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

import { setRange } from '../../ac/index'

function DateRange({ range, setRange }) {
  const { from, to } = range

  const handleDayClick = (day) => setRange(DateUtils.addDayToRange(day, range))

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

const mapStateToProps = (state) => {
  return {
    range: state.articlesFilter.range
  }
}

export default connect(
  mapStateToProps,
  { setRange }
)(DateRange)

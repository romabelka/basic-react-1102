import React, { useState } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { setDateFrom, setDateTo } from '../../ac/index'

function DateRange({ from, to, dispatch }) {
  const handleDayClick = (day) => {
    const oldRange = { from, to }
    const newRange = DateUtils.addDayToRange(day, oldRange)

    dispatch(setDateFrom(newRange.from))
    dispatch(setDateTo(newRange.to))
  }

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

function mapStateToProps(state) {
  return {
    from: state.filter.dateFrom,
    to: state.filter.dateTo
  }
}

export default connect(mapStateToProps)(DateRange)

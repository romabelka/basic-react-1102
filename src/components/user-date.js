import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

const { addDayToRange } = DateUtils

function UserDate() {
  const [dateRange, setDateRange] = useState({ from: null, to: null })

  const handleDayClick = (day) => {
    const newRange = addDayToRange(day, dateRange)
    setDateRange(newRange)
  }

  const renderRange = () => {
    const { from, to } = dateRange

    if (from && to && from.toString() !== to.toString()) {
      return (
        <h2>{`Date range: from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}</h2>
      )
    }

    if (from) {
      return <h2>{`Date: ${from.toLocaleDateString()}`}</h2>
    }

    return <h2>Please, select single date or range of dates</h2>
  }

  return (
    <div>
      {renderRange()}
      <DayPicker
        className="Selectable"
        selectedDays={[dateRange.from, dateRange]}
        modifiers={dateRange}
        onDayClick={handleDayClick}
      />
    </div>
  )
}

export default UserDate

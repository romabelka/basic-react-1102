import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeFilters } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  render() {
    const handleDayClick = (day) => {
      this.setState(DateUtils.addDayToRange(day, this.state))

      const { from, to } = DateUtils.addDayToRange(day, this.state)
      const ids = this.props.filters.articleIds
      const newFilters = { dates: { from: from, to: to }, articleIds: ids }
      this.props.handleChangeFilters(newFilters)
    }

    const { from, to } = this.state
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
}

const mapStateToProps = (storeState) => ({
  filters: storeState.filters
})

const mapDispatchToProps = {
  handleChangeFilters: changeFilters
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)

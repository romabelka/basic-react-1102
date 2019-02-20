import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import propTypes from 'prop-types'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

Filters.propTypes = {
  articles: propTypes.array
}

Filters.defaultProps = {
  articles: []
}

export default Filters

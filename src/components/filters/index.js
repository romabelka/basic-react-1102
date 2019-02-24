import React, { Component } from 'react'
import { connect } from 'react-redux'

import DateRange from './date-range'
import SelectFilter from './select'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Filters)

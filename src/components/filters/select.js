import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectedFilter } from '../../ac'

function SelectFilter({ updateSelect, selected, articles }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))
  return <Select options={options} value={selected} onChange={updateSelect} isMulti />
}

const mapStateToProps = (storeState) => ({
  selected: storeState.selected
})

const mapDispatchToProps = {
  updateSelect: selectedFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

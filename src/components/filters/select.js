import React, { useState } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setSelectedArticles } from '../../ac/index'

function SelectFilter({ articles, selected, dispatch }) {
  function setSelection(value) {
    dispatch(setSelectedArticles(value))
  }

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={setSelection} isMulti />
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    selected: state.filter.selectedArticles
  }
}

export default connect(mapStateToProps)(SelectFilter)

import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import { selectArticles } from '../../ac/index'

function SelectFilter({ articles, selectArticles, selected }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={selectArticles} isMulti />
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  selected: state.articlesFilter.selected
})

const mapDispatchToProps = {
  selectArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

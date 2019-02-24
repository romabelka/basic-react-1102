import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { changeFilters } from '../../ac'

class SelectFilter extends Component {
  articleSelectorChangeHandler = (selectedArticles) => {
    const { from, to } = this.props.filters.dates
    const ids = selectedArticles.map((article) => {
      return article.value
    })
    const newFilters = { dates: { from: from, to: to }, articleIds: ids }
    this.props.handleChangeFilters(newFilters)
  }
  render() {
    const { articles } = this.props
    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))

    return <Select options={options} onChange={this.articleSelectorChangeHandler} isMulti />
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
)(SelectFilter)

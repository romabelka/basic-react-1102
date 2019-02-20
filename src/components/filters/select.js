import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

function SelectFilter({ articles }) {
  const [selected, setSelection] = useState(null)

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={setSelection} isMulti />
}

SelectFilter.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
}

export default SelectFilter

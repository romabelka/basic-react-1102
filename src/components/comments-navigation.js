import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class CommentsNavigation extends Component {
  static propTypes = {
    activePage: PropTypes.number,
    hasNext: PropTypes.bool
  }

  static defaultProps = {
    activePage: 1,
    hasNext: false
  }

  render() {
    const { activePage, hasNext } = this.props

    return (
      <div>
        {activePage > 1 ? this.renderPageLink('Prev', activePage - 1) : null}
        <strong style={{ margin: '0 20px', display: 'inline-block' }}>Page: {activePage}</strong>
        {hasNext ? this.renderPageLink('Next', activePage + 1) : null}
      </div>
    )
  }

  renderPageLink(label, page) {
    return <Link to={`/comments/${page}`}>{label}</Link>
  }
}

export default CommentsNavigation

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../ac/index'

class CommentsPageList extends Component {
  componentDidMount() {
    const { page, loadComments } = this.props
    loadComments(page)
  }

  componentDidUpdate(oldProps) {
    const { page, loadComments } = this.props

    if (page !== oldProps.page) {
      loadComments(page)
    }
  }

  render() {
    const { items } = this.props

    if (!items) {
      return null
    }

    return items.map((model) => {
      return (
        <p>
          {model.text} <br />
          <b>by {model.user}</b>
        </p>
      )
    })
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.allComments.entities.get(ownProps.page)
  }
}

export default connect(
  mapStateToProps,
  { loadComments }
)(CommentsPageList)

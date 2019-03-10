import React from 'react'
import { connect } from 'react-redux'
import CommentsNavigation from '../comments-navigation'
import CommentsPageList from '../comments-page-list'

function CommentsPage({ match, hasNext }) {
  const page = match.params.page || 1
  return (
    <div>
      <CommentsPageList page={page} />
      <CommentsNavigation activePage={+page} hasNext={hasNext} />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  const totalPagesCount = Math.ceil(state.allComments.itemsCount / 5)

  return {
    hasNext: totalPagesCount > +ownProps.match.params.page
  }
}

export default connect(mapStateToProps)(CommentsPage)

import React from 'react'
import PaginationComment from '../pagination-comment'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { commentsTotalSelector } from '../../selectors'

const DEFAULT_LOAD_PAGE = 1

function CommentRoute({ total }) {
  const pageCount = Math.ceil(total / 5)
  let navLink = []
  for (let i = 1; i <= pageCount; i++) {
    navLink.push(
      <NavLink key={i} to={`/comments/page/${i}`} activeStyle={{ color: 'red' }}>
        {i}
      </NavLink>
    )
  }
  return (
    <div>
      {navLink}
      <Route path="/comments/page/:id" children={getFiveComment} />
    </div>
  )
}

const getFiveComment = ({ match }) => {
  return match ? (
    <PaginationComment page={match.params.id} />
  ) : (
    <PaginationComment page={DEFAULT_LOAD_PAGE} />
  )
}

export default connect(
  (state) => ({ total: commentsTotalSelector(state) }),
  null
)(CommentRoute)

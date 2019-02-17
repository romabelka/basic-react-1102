import React from 'react'
import Comment from './comment'

import useToggle from '../custom-hooks/toggle'

function CommentsList({ collection }) {
  const { isOpen, toggle } = useToggle()

  const commentItems = collection.map((comment) => (
    <li key={comment.id}>
      <Comment model={comment} />
    </li>
  ))

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Comments: </h2>
      <button onClick={toggle}>{isOpen ? 'Close' : 'Show'}</button>
      {isOpen ? <ul>{commentItems}</ul> : null}
    </div>
  )
}

export default CommentsList

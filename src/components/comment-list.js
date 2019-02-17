import React from 'react'
import Comment from './comment'

export default function CommentList({ comments, onBtnClick, isOpen }) {
  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ))

  const btnText = isOpen ? 'close' : 'open'

  return (
    <div>
      <h4>
        Комментарии: <button onClick={onBtnClick}>{btnText}</button>
      </h4>
      {isOpen ? <ul>{commentItems}</ul> : null}
    </div>
  )
}

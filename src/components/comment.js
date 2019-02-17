import React from 'react'

const Comment = ({ text, user }) => (
  <div>
    <p>{text}</p>
    <p>
      <small>{user}</small>
    </p>
  </div>
)

export default Comment

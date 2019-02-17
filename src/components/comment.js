import React from 'react'

export default (Comment = ({ user, text }) => {
  return (
    <div>
      <b style={{ color: '#2a5885' }}>{user}:</b>
      <p style={{ marginTop: 0 }}>{text}</p>
    </div>
  )
})

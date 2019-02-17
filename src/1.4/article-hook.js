import React, { useState } from 'react'

export default ({ article }) => {
  let [isOpen, setIsOpen] = useState(false)
  const btnText = isOpen ? 'close' : 'open'
  const handler = () => setIsOpen(!isOpen)

  const getBody = () => {
    if (!isOpen) return null
    return <section>{article.text}</section>
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <button onClick={handler}>{btnText}</button>
      {getBody()}
    </div>
  )
}

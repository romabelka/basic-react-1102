import React, { useState } from 'react'

function commentForm() {
  const [author, setAuthor] = useState('')
  const [comment, setComment] = useState('')
  const [validationError, setValidationError] = useState('')

  function authorInputHandler({ target }) {
    const { value } = target

    setAuthor(value)
  }

  function commentInputHandler({ target }) {
    const { value } = target

    setComment(value)
  }

  function validateData(event) {
    event.preventDefault()
    setValidationError('')

    if (comment.length < 5) {
      setValidationError(`${validationError}Comment must be longer than 5 characters`)
    }

    if (author.length < 5) {
      setValidationError(`${validationError}; author must be longer than 5 characters`)
    }
  }

  return (
    <section>
      <h2>New comment</h2>
      <form action="/">
        <input type="text" onInput={authorInputHandler} placeholder="Author name" />
        <div>
          <textarea placeholder="Comment text" onInput={commentInputHandler} cols="30" rows="10" />
        </div>
        <div style={{ color: 'red' }}>{validationError}</div>
        <button onClick={validateData}>submit</button>
      </form>
    </section>
  )
}

export default commentForm

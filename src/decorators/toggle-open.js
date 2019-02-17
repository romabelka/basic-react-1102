import React from 'react'
import useToggle from '../custom-hooks/toggle'

export default (OriginalComponent) => (props) => {
  const [isOpen, setIsOpen] = useToggle(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleOpen} type="button">
        {isOpen ? 'Close comments' : 'Open comments'}
      </button>
      {isOpen ? <OriginalComponent {...props} /> : null}
    </div>
  )
}

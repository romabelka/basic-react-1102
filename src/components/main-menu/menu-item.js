import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuItem({ link, children }) {
  return (
    <div>
      <NavLink to={link} activeStyle={{ color: 'red' }}>
        {children}
      </NavLink>
    </div>
  )
}

MenuItem.propTypes = {}

export default MenuItem

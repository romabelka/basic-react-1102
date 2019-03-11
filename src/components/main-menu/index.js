import React from 'react'
import MenuItem from './menu-item'

function MainMenu({ children }) {
  return (
    <div>
      <h3>Main Menu</h3>
      <nav>{children}</nav>
    </div>
  )
}

MainMenu.propTypes = {}

export { MenuItem }
export default MainMenu

import React from 'react'
import MenuItem from './menu-item'
import { LocalizationContext } from '../../contexts/localization-context'

function MainMenu({ children }) {
  //
  return (
    <div>
      //fixme не разобрался почему в value ничего нет
      <LocalizationContext.Consumer>
        {(value) => {
          return <h3>{(value && value.mainMenu) || 'mainMenu'}</h3>
        }}
      </LocalizationContext.Consumer>
      <nav>{children}</nav>
    </div>
  )
}

MainMenu.propTypes = {}

export { MenuItem }
export default MainMenu

import React from 'react'
export const localization = {
  en: {
    close: 'close',
    delete: 'delete',
    mainMenu: 'main menu',
    username: 'username'
  },
  ru: {
    close: 'закрыть',
    delete: 'удалить',
    mainMenu: 'основное меню',
    username: 'пользователь'
  }
}

export const LocalizationContext = React.createContext(localization.en)

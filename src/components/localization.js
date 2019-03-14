import React, { Component } from 'react'
import { LocalizationContext, localization } from '../contexts/localization-context'

class Localization extends Component {
  state = {
    localization: localization.en
  }

  render() {
    return (
      <div>
        <LocalizationContext.Provider value={this.state.localization}>
          <button onClick={this.toggleLocalization('ru')}>рус</button>
          <button onClick={this.toggleLocalization('en')}> en</button>
        </LocalizationContext.Provider>
      </div>
    )
  }

  toggleLocalization = (lang) => () => {
    this.setState({
      localization: localization[lang]
    })
  }
}

export default Localization

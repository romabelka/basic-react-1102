import React, { Component } from 'react'

class LanguageSelector extends Component {
  render() {
    return (
      <div style={{ margin: '20px 0' }}>
        {this.renderItem('EN')}
        {this.renderItem('RU')}
      </div>
    )
  }

  renderItem(lang) {
    const { value } = this.props

    if (value === lang) {
      return <b>{lang}</b>
    } else {
      return (
        <a href="#" onClick={(e) => this.onLanguageClick(e, lang)}>
          {lang}
        </a>
      )
    }
  }

  onLanguageClick(e, lang) {
    e.preventDefault()

    if (this.props.onChange) {
      this.props.onChange(lang)
    }
  }
}

export default LanguageSelector

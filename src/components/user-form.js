import React, { Component } from 'react'
import { Consumer as LanguageConsumer } from '../contexts/language-context'

class UserForm extends Component {
  render() {
    const { value } = this.props
    return (
      <div>
        <LanguageConsumer>
          {(language, dict) => <span>{language === 'EN' ? 'Username' : 'Пользователь'}</span>}
        </LanguageConsumer>
        <input value={value} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange = (ev) => {
    this.props.onChange(ev.target.value)
  }
}

export default UserForm

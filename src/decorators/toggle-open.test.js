import React from 'react'
import { mount } from 'enzyme'
import toggleOpen from './toggle-open'

describe('ToggleOpen', () => {
  function Hello({ isOpen, toggleOpen }) {
    return (
      <div>
        <button onClick={toggleOpen} />
        <h1>{isOpen ? 'open' : 'closed'}</h1>
      </div>
    )
  }

  it('should be closed', () => {
    const DecoratedHello = toggleOpen(Hello)

    const container = mount(<DecoratedHello />)

    expect(
      container
        .find('h1')
        .at(0)
        .text()
    ).toBe('closed')
  })

  it('should open', () => {
    const DecoratedHello = toggleOpen(Hello)

    const container = mount(<DecoratedHello />)

    container
      .find('button')
      .at(0)
      .simulate('click')

    expect(
      container
        .find('h1')
        .at(0)
        .text()
    ).toBe('open')
  })
})

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'

import articles from '../fixtures'

const article = articles[0]

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should hide body when isOpen=false', () => {
    const container = mount(<Article article={article} isOpen={false} />)
    expect(container.find('.test--article__body').length).toBe(0)
  })

  it('should show body when isOpen=true', () => {
    const container = mount(<Article article={article} isOpen={true} />)
    expect(container.find('.test--article__body').length).toBe(1)
  })

  it('check button label when isOpen=true', () => {
    const container = mount(<Article article={article} isOpen={true} />)
    expect(container.find('.test--article__btn').text()).toBe('close')
  })

  it('check button label when isOpen=false', () => {
    const container = mount(<Article article={article} isOpen={false} />)
    expect(container.find('.test--article__btn').text()).toBe('open')
  })
})

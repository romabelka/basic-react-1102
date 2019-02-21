import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import fixture from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })
const articleData = fixture[0]

describe('<Article />', () => {
  it('should render Article', () => {
    const article = mount(<Article article={articleData} isOpen={true} />)
    expect(article.find('.test--article__title').length).toBe(1)
    expect(article.find('.test--article__body').length).toBe(1)
  })
  it('should [title, body] articleData equal render open [title, body]', () => {
    const article = mount(<Article article={articleData} isOpen={true} />)
    expect(article.find('.test--article__title').text()).toBe(articleData.title)
    expect(
      article
        .find('.test--article__body')
        .childAt(0)
        .text()
    ).toBe(articleData.text)
  })
})

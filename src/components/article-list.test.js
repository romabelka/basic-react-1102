import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleList from './article-list'
import articles from '../fixtures'
import CommentList from './comment-list'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render ArticleList', () => {
    const container = mount(<ArticleList articles={[]} />)
    expect(container.find('.test--article-list__container').length).toBe(1)
  })

  it('should render all articles closed by default', () => {
    const container = mount(<ArticleList articles={articles} />)
    expect(container.find('.test--article__body').length).toBe(0)
  })

  it('should open article on click', () => {
    const container = mount(<ArticleList articles={articles} />)
    expect(container.find('.test--article__body').length).toBe(0)

    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--article__body').length).toBe(1)
  })

  it('should fetch all articles on mount', function() {
    const fn = jest.fn()
    mount(<ArticleList articles={articles} fetchAll={fn} />)
    expect(fn.mock.calls.length).toBe(1)
  })
})

describe('Article', () => {
  it('after expand article it body should appear with button for expand comments with collapsed comments', () => {
    const container = mount(<ArticleList articles={articles} />)
    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--article__body').length).toBe(1)
    expect(container.find('.test--commentlist__btn').length).toBe(1)
    expect(container.find('.test--comment__body').length).toBe(0)
  })
})

describe('CommentList', () => {
  it('all comments should by collapsed after expand first article', () => {
    const container = mount(<ArticleList articles={articles} />)
    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment__body').length).toBe(0)
  })

  it('should open 5 comments on click in first article', () => {
    const container = mount(<ArticleList articles={articles} />)
    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    container
      .find('.test--commentlist__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment__body').length).toBe(5)
  })
})

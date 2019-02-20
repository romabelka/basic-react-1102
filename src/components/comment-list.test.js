import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import articles from '../fixtures'
import CommentList from './comment-list'

const comments = articles[0].comments

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('check button label when isOpen=true', () => {
    const container = mount(<CommentList comments={comments} isOpen={true} />)
    expect(container.find('.test--toggle_comments__btn').text()).toBe('hide comments')
  })

  it('check button label when isOpen=false', () => {
    const container = mount(<CommentList comments={comments} isOpen={false} />)
    expect(container.find('.test--toggle_comments__btn').text()).toBe('show comments')
  })

  it('check no comments when comments are not pass to component', () => {
    const container = mount(<CommentList isOpen={true} />)
    expect(container.find('.test--comments_list').length).toBe(0)
  })

  it('check "no comments" label exists when comments are empty', () => {
    const container = mount(<CommentList isOpen={true} />)
    expect(container.find('.test--comments_empty-label').length).toBe(1)
  })

  it('check "no comments" label does not exist when comments are not empty', () => {
    const container = mount(<CommentList isOpen={true} comments={comments} />)
    expect(container.find('.test--comments_empty-label').length).toBe(0)
  })

  it('check comments list', () => {
    const container = mount(<CommentList comments={comments} isOpen={true} />)
    expect(container.find('.test--comments_item').length).toBe(comments.length)
  })

  it('should toggle comments on clicks on toggle button', () => {
    const container = mount(<CommentList comments={comments} />)
    expect(container.find('.test--comments_list').length).toBe(0)

    container
      .find('.test--toggle_comments__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--toggle_comments__btn').text()).toBe('hide comments')
    expect(container.find('.test--comments_list').length).toBe(1)
    expect(container.find('.test--comments_item').length).toBe(comments.length)

    container
      .find('.test--toggle_comments__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--toggle_comments__btn').text()).toBe('show comments')
    expect(container.find('.test--comments_list').length).toBe(0)
  })
})

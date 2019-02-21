import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import CommentList from './comment-list'
import { mount } from 'enzyme'
import { shallow } from 'enzyme'
import fixtures from '../fixtures'
import { render } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('<CommentList />', () => {
  it('render empty CommentList', () => {
    expect(mount(<CommentList />).find('.test-comment__container').length).toBe(1)
  })
  it('render 5 comments', () => {
    const articleComments = fixtures[0].comments
    expect(mount(<CommentList comments={articleComments} isOpen={true} />).find('li').length).toBe(
      articleComments.length
    )
  })
  it('test Open button', () => {
    const container = mount(<CommentList />)
    expect(container.find('.test-comment__no-comment').length).toBe(0)
    container
      .find('button')
      .first()
      .simulate('click')
    expect(container.find('.test-comment__no-comment').length).toBe(1)
  })
})

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Chart from './components/chart'
import App from './App'
import articles from './fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe.only('ArticleList', () => {
  it('should render ArticleList', () => {
    const container = mount(<App />)
    expect(container.find('Chart').length).toBe(1)
  })
})

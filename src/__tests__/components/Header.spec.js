import React from 'react'
import { shallow } from 'enzyme'
import Header from '~/components/Header'

describe('Header', () => {
  it('should be able to mount component', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.length).toBe(1)
  })
})

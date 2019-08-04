import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import createStore from 'redux-mock-store'

import { STATE } from '~/__mocks__/mockedInitialState'

import ResponsiveGrid from '~/components/ResponsiveGrid'
import { JestEnvironment } from '@jest/environment';

const mockStore = createStore()

const store = mockStore(STATE)

const props = {
  tutors: [],
  error: '',
  loading: false,
  city: '',
  sort: '',
  getRequest: jest.fn(),
}

describe('ResponsiveGrid', () => {
  it('should be able to mount component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResponsiveGrid {...props} />
      </Provider>,
    )
    expect(wrapper.find('ResponsiveGrid').length).toBe(1)
  })

  it('should be able to list all', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResponsiveGrid {...props} />
      </Provider>,
    )
    const wrapperInside = wrapper.find('ResponsiveGrid')
    wrapperInside.find('button#all').simulate('click')
    expect(props.getRequest).toHaveBeenCalled()
  })
})

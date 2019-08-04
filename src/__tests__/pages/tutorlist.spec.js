import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import createStore from 'redux-mock-store'

import Tutorlist from '~/pages/tutorlist'

import { STATE } from '~/__mocks__/mockedInitialState'

const mockStore = createStore()

const store = mockStore(STATE)

describe('Tutorlist', () => {
  it('should be able to mount component and get tutors component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tutorlist />
      </Provider>,
    )

    expect(wrapper.find('Header').length).toBe(1)
  })

  it('should be able to search', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tutorlist />
      </Provider>,
    )
    const wrapperInside = wrapper.find('Tutorlist')

    expect(wrapperInside.instance().props.tutors).toEqual(STATE.tutors.data)
  })
})

import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Filters from '~/components/Filters'
import { INITIAL_STATE } from './initialState'

import TutorsActions from '~/store/ducks/tutors'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(INITIAL_STATE)

const mockProps = {
  getRequest: jest.fn(),
  loading: false,
  city: '',
  sort: '',
  error: '',
}

describe('Filters', () => {
  it('should be able to click Liverpool button and call function to fill tutors store', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Filters {...mockProps} />,
      </Provider>,
    )
    const wrapperInside = wrapper.find('Filters')
    wrapperInside.find('button#Liverpool').simulate('click')

    expect(store.getActions()).toContainEqual(
      TutorsActions.getRequest({ city: 'Liverpool', sort: '' }),
    )
  })
  it('should be able to click Manchester button and call function to fill tutors store', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Filters {...mockProps} />,
      </Provider>,
    )
    const wrapperInside = wrapper.find('Filters')
    wrapperInside.find('button#Manchester').simulate('click')

    expect(store.getActions()).toContainEqual(
      TutorsActions.getRequest({ city: 'Manchester', sort: '' }),
    )
  })
  it('should be able to click London button and call function to fill tutors store', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Filters {...mockProps} />,
      </Provider>,
    )
    const wrapperInside = wrapper.find('Filters')
    wrapperInside.find('button#London').simulate('click')

    expect(store.getActions()).toContainEqual(
      TutorsActions.getRequest({ city: 'London', sort: '' }),
    )
  })
  it('should be able to click Name button and call function to fill tutors store', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Filters {...mockProps} />,
      </Provider>,
    )
    const wrapperInside = wrapper.find('Filters')
    wrapperInside.find('button#name').simulate('click')

    expect(store.getActions()).toContainEqual(TutorsActions.getRequest({ city: '', sort: 'name' }))
  })
  it('should be able to click City button and call function to fill tutors store', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Filters {...mockProps} />,
      </Provider>,
    )
    const wrapperInside = wrapper.find('Filters')
    wrapperInside.find('button#city').simulate('click')

    expect(store.getActions()).toContainEqual(TutorsActions.getRequest({ city: '', sort: 'city' }))
  })
})

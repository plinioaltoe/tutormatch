import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ResponsiveGrid from '~/components/ResponsiveGrid'
import { INITIAL_STATE } from './initialState'

import TutorsActions from '~/store/ducks/tutors'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(INITIAL_STATE)

const mockProps = {
  getRequest: jest.fn(),
}

describe('ResponsiveGrid', () => {
  it('should be able to click button and call function to fill tutors store', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResponsiveGrid {...mockProps} />,
      </Provider>,
    )
    const wrapperInside = wrapper.find('ResponsiveGrid')
    wrapperInside.find('button#all').simulate('click')

    expect(store.getActions()).toContainEqual(
      TutorsActions.getRequest({ all: true, city: '', sort: '' }),
    )
  })
})

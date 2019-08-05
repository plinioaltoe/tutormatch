import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ResponsiveGrid from '~/components/ResponsiveGrid'
import { STATE } from '~/__mocks__/mockedInitialState'

import TutorsActions from '~/store/ducks/tutors'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(STATE)

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

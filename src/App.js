import React from 'react'
import { Provider } from 'react-redux'

import '~/config/reactotron'
import GlobalStyle from '~/styles/global'

import Tutorlist from '~/pages/tutorlist'

import store from '~/store'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Tutorlist />
  </Provider>
)

export default App

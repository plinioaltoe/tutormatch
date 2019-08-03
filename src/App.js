import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import '~/config/reactotron'
import GlobalStyle from '~/styles/global'

import Routes from '~/routes'
import store from '~/store'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default App

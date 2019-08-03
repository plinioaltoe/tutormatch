import React, { Component } from 'react'

import Header from '~/components/Header'
import Filter from '~/components/Filters'
import ResponsiveGrid from '~/components/ResponsiveGrid'

import { Container, Content, Linha } from './styles'

export default class Tutorlist extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Filter />
          <Linha />
          <ResponsiveGrid />
        </Content>
      </Container>
    )
  }
}

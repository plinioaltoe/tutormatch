import React from 'react'

import { Container, Content } from './styles'
import CardTutor from '~/components/CardTutor'

const ResponsiveGrid = () => (
  <Container>
    <Content>
      <CardTutor />
      <CardTutor />
      <CardTutor />
      <CardTutor />
      <CardTutor />
    </Content>
    <button type="button">See all Tutors</button>
  </Container>
)

export default ResponsiveGrid

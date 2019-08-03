import React from 'react'

import {
  Container,
  Title,
  SubTitle,
  Group,
  Text,
  ButtonLeft,
  ButtonCenter,
  ButtonRight,
  ButtonGroup,
} from './styles'

const Filters = () => (
  <Container>
    <Title>Our Tutors</Title>
    <SubTitle>
      We have more than 100 tutors from various disciplines ready to match with you.
    </SubTitle>
    <Group>
      <Text>Filter by:</Text>
      <ButtonGroup>
        <ButtonLeft>Liverpool</ButtonLeft>
        <ButtonCenter>London</ButtonCenter>
        <ButtonRight>Manchester</ButtonRight>
      </ButtonGroup>
      <Text>Sort by:</Text>
      <ButtonGroup>
        <ButtonLeft>Name</ButtonLeft>
        <ButtonRight selected>City</ButtonRight>
      </ButtonGroup>
    </Group>
  </Container>
)

export default Filters

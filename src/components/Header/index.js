import React from 'react'

import Logo from '~/assets/tutormatch-logo.svg'

import {
  Container, FirstBar, RigthContent, SecondBar, Title, SubTitle,
} from './styles'

const Header = () => (
  <Container>
    <FirstBar>
      <img src={Logo} alt="Logo" />
      <RigthContent>
        <div>Become a Tutor</div>
        <button type="button">Sign In</button>
      </RigthContent>
    </FirstBar>
    <SecondBar>
      <Title>The place where Tutors and Students meet</Title>
      <SubTitle>Find out who can help you take your education to the next level.</SubTitle>
      <button type="button">Get started now</button>
    </SecondBar>
  </Container>
)

export default Header

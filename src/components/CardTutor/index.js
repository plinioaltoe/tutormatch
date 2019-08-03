import React from 'react'

import Tutor from '~/assets/user-photo.svg'
import Student from '~/assets/student-photo.svg'

import {
  Container,
  ImgContainer,
  Name,
  Text,
  Chip,
  GroupStudents,
  GroupContainer,
  ImgStudent,
} from './styles'

const CardTutor = () => (
  <Container>
    <ImgContainer>
      <img src={Tutor} alt="tutor" />
    </ImgContainer>
    <GroupContainer>
      <Name>Jonh Issac</Name>
      <Text>City</Text>
      <Chip>Liverpool</Chip>
      <Text>Stundents so far</Text>
      <GroupStudents>
        <ImgStudent>
          <img src={Student} alt="students" />
        </ImgStudent>
        <ImgStudent>
          <img src={Student} alt="students" />
        </ImgStudent>
        <ImgStudent>
          <img src={Student} alt="students" />
        </ImgStudent>
        <ImgStudent>
          <img src={Student} alt="students" />
        </ImgStudent>
      </GroupStudents>
    </GroupContainer>
  </Container>
)

export default CardTutor

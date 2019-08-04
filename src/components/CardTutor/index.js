import React from 'react'
import PropTypes from 'prop-types'

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

const CardTutor = ({ tutor }) => {
  const {
    name, city, photo, students,
  } = tutor
  return (
    <Container>
      <ImgContainer>
        <img src={photo} alt="tutor pic not found" />
      </ImgContainer>
      <GroupContainer>
        <Name>{name}</Name>
        <Text>City</Text>
        <Chip>{city}</Chip>
        <Text>Stundents so far</Text>
        <GroupStudents>
          {students.map(student => (
            <ImgStudent key={student.id}>
              <img src={student.photo} alt="students pic not found" />
            </ImgStudent>
          ))}
        </GroupStudents>
      </GroupContainer>
    </Container>
  )
}

CardTutor.propTypes = {
  tutor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    photo: PropTypes.string,
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        photo: PropTypes.string,
      }),
    ),
  }).isRequired,
}

export default CardTutor

import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import TutorActions from '~/store/ducks/tutors'

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

const handleCity = ({
  city, selected, getRequest, sort,
}) => {
  if (city === selected) getRequest({ city: '', sort })
  else getRequest({ city: selected, sort })
}

const Filters = ({
  city, sort, loading, getRequest,
}) => (
  <Container>
    <Title>Our Tutors</Title>
    <SubTitle>
        We have more than 100 tutors from various disciplines ready to match with you.
    </SubTitle>
    <Group>
      <Text>Filter by:</Text>
      <ButtonGroup>
        <ButtonLeft
          selected={city && city === 'Liverpool'}
          type="button"
          onClick={() => handleCity({
            city,
            selected: 'Liverpool',
            getRequest,
            sort,
          })
          }
          disabled={loading}
        >
            Liverpool
        </ButtonLeft>
        <ButtonCenter
          selected={city && city === 'London'}
          type="button"
          onClick={() => handleCity({
            city,
            selected: 'London',
            getRequest,
            sort,
          })
          }
          disabled={loading}
        >
            London
        </ButtonCenter>
        <ButtonRight
          selected={city && city === 'Manchester'}
          type="button"
          onClick={() => handleCity({
            city,
            selected: 'Manchester',
            getRequest,
            sort,
          })
          }
          disabled={loading}
        >
            Manchester
        </ButtonRight>
      </ButtonGroup>
      <Text>Sort by:</Text>
      <ButtonGroup>
        <ButtonLeft
          selected={sort && sort === 'name'}
          type="button"
          onClick={() => getRequest({ sort: 'name', city })}
          disabled={loading}
        >
            Name
        </ButtonLeft>
        <ButtonRight
          selected={sort && sort === 'city'}
          type="button"
          onClick={() => getRequest({ sort: 'city', city })}
          disabled={loading}
        >
            City
        </ButtonRight>
      </ButtonGroup>
    </Group>
  </Container>
)

const mapStateToProps = state => ({
  city: state.tutors.city,
  sort: state.tutors.sort,
})

const mapDispatchToProps = dispatch => bindActionCreators(TutorActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters)

Filters.defaultProps = {
  sort: '',
  city: '',
}

Filters.propTypes = {
  city: PropTypes.string,
  sort: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  getRequest: PropTypes.func.isRequired,
}

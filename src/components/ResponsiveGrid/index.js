import React, { Fragment } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'
import CardTutor from '~/components/CardTutor'
import TutorsActions from '~/store/ducks/tutors'


const ResponsiveGrid = ({
  tutors, error, loading, getRequest, city, sort,
}) => (
  <Container>
    {error && <p>{error}</p>}
    <Fragment>
      <Content>
        {tutors.length > 0
          && tutors.map(tutor => <CardTutor key={tutor.id} tutor={tutor} loading={loading} />)}
      </Content>
      <button
        id="all"
        type="button"
        onClick={() => getRequest({ all: true, city, sort })}
        disabled={loading}
      >
        {loading ? <i className="fa fa-spinner fa-pulse" /> : 'See all Tutors'}
      </button>
    </Fragment>
  </Container>
)

const mapStateToProps = state => ({
  tutors: state.tutors.data,
  error: state.tutors.error,
  loading: state.tutors.loading,
  city: state.tutors.city,
  sort: state.tutors.sort,
})

const mapDispatchToProps = dispatch => bindActionCreators(TutorsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResponsiveGrid)

ResponsiveGrid.defaultProps = {
  sort: '',
  city: '',
}

ResponsiveGrid.propTypes = {
  getRequest: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  tutors: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  city: PropTypes.string,
  sort: PropTypes.string,
}

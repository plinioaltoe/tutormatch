import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'
import CardTutor from '~/components/CardTutor'
import { Creators as TutorActions } from '~/store/ducks/tutors'

class ResponsiveGrid extends Component {
  static propTypes = {
    getTutorsRequest: PropTypes.func.isRequired,
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
  }

  render() {
    const { tutors, error, loading } = this.props
    return (
      <Container>
        {error && <p>{error}</p>}
        {loading ? (
          <i className="fa fa-spinner fa-pulse" />
        ) : (
          <Fragment>
            <Content>
              {tutors.length > 0 && tutors.map(tutor => <CardTutor key={tutor.id} tutor={tutor} />)}
            </Content>
            <button type="button" onClick={() => {}}>
              See all Tutors
            </button>
          </Fragment>
        )}
      </Container>
    )
  }
}
const mapStateToProps = state => ({
  tutors: state.tutors.data,
})

const mapDispatchToProps = dispatch => bindActionCreators(TutorActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResponsiveGrid)

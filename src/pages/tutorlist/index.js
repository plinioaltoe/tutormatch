import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '~/components/Header'
import Filter from '~/components/Filters'
import ResponsiveGrid from '~/components/ResponsiveGrid'

import TutorActions from '~/store/ducks/tutors'

import { Container, Content, Linha } from './styles'

class Tutorlist extends Component {
  static propTypes = {
    getRequest: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.handleSearch({ city: null, sort: null, all: null })
  }

  handleSearch = ({ city, sort, all }) => {
    const { getRequest } = this.props
    getRequest({
      city,
      sort,
      all,
    })
  }

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

const mapStateToProps = state => ({
  tutors: state.tutors.data,
})

const mapDispatchToProps = dispatch => bindActionCreators(TutorActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorlist)

import { call, put } from 'redux-saga/effects'
import api from '~/services/api'
import { Creators as TutorsActions } from '../ducks/tutors'

export function* getTutors({ payload }) {
  try {
    const { city, sort, all } = payload
    let url = `/tutors?`
    url += city ? `&city=${city}` : ``
    url += sort ? `&_sort=${sort}&_order=asc` : ``
    url += !all ? `_page=1&_limit=10` : ``

    const response = yield call(api.get, url)
    const { data } = response
    yield put(TutorsActions.getTutorsSuccess({ data, city, sort }))
  } catch (error) {
    yield put(TutorsActions.getTutorFailure('Error'))
  }
}

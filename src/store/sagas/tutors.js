import { call, put } from 'redux-saga/effects'
import api from '~/services/api'
import TutorsActions from '~/store/ducks/tutors'

export function* getTutors({ filter }) {
  try {
    const { city, sort, all } = filter
    let url = `/tutors?`
    url += city ? `&city=${city}` : ``
    url += sort ? `&_sort=${sort}&_order=asc` : ``
    url += !all ? `&_page=1&_limit=20` : ``
    const response = yield call(api.get, url)
    const { data } = response
    yield put(TutorsActions.getSuccess(data, city, sort))
  } catch (error) {
    yield put(TutorsActions.getFailure('Error'))
  }
}

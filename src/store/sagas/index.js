import { all, takeLatest } from 'redux-saga/effects'

import { Types as TutorsTypes } from '~/store/ducks/tutors'
import { getTutors } from './tutors'

export default function* rootSaga() {
  const tutorsGet = takeLatest(TutorsTypes.GET_REQUEST, getTutors)
  yield all([tutorsGet])
}

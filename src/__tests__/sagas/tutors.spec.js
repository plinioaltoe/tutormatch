import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'
import api from '~/services/api'
import { getTutors } from '~/store/sagas/tutors'
import TutorsActions from '~/store/ducks/tutors'

const apiMock = new MockAdapter(api)

describe('Tutor Saga', () => {
  test('should be able to get tutors', async () => {
    const dispatched = []

    const initialAction = { filter: { city: 'London', sort: 'name', all: false } }
    const response = {
      tutors: 'success',
    }
    const responseSuccess = {
      tutors: 'success',
    }

    apiMock
      .onGet(
        `/tutors?&city=${initialAction.filter.city}&_sort=${
          initialAction.filter.sort
        }&_order=asc&_page=1&_limit=10`,
      )
      .reply(200, response)

    await runSaga(
      {
        dispatch: (action) => {
          dispatched.push(action)
        },
      },
      getTutors,
      initialAction,
    ).toPromise()
    expect(dispatched).toContainEqual(
      TutorsActions.getSuccess(
        responseSuccess,
        initialAction.filter.city,
        initialAction.filter.sort,
      ),
    )
  })

  test('should failure to get tutors', async () => {
    const dispatched = []
    const initialAction = { filter: { city: 'London', sort: 'name', all: false } }
    const response = 'Error'
    apiMock
      .onGet(
        `/tutors?&city=${initialAction.filter.city}&_sort=${
          initialAction.filter.sort
        }&_order=asc&_page=1&_limit=10`,
      )
      .reply(500)

    await runSaga(
      {
        dispatch: (action) => {
          dispatched.push(action)
        },
      },
      getTutors,
      initialAction,
    ).toPromise()
    expect(dispatched).toContainEqual(TutorsActions.getFailure(response))
  })
})

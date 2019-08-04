import INITIAL_STATE from '~/__mocks__/mockedInitialState'
import TutorsActions, { reducer as tutors } from '~/store/ducks/tutors'

describe('Tutors Reducer', () => {
  test('should be able to call get request', () => {
    const data = {
      data: 'some data',
    }
    const state = tutors(INITIAL_STATE, TutorsActions.getRequest(data))
    expect(state.data).toEqual([])
    expect(state.loading).toBeTruthy()
    expect(state.error).toBe('')
  })

  test('should be able to call get failure', () => {
    const error = 'deu erro'
    const state = tutors(INITIAL_STATE, TutorsActions.getFailure(error))
    expect(state.data).toEqual([])
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe(error)
  })

  test('should be able to call get success', () => {
    const data = {
      data: 'some data',
    }
    const state = tutors(INITIAL_STATE, TutorsActions.getSuccess(data))
    expect(state.data).toEqual(data)
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe('')
  })
})

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getRequest: ['filter'],
  getSuccess: ['data', 'city', 'sort'],
  getFailure: ['error'],
})

export const TutorsTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: '',
  city: '',
  sort: '',
})

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REQUEST]: state => state.merge({
    loading: true,
  }),
  [Types.GET_SUCCESS]: (state, { data, city, sort }) => state.merge({
    loading: false,
    data,
    sort: typeof sort === typeof null ? state.sort : sort,
    city: typeof city === typeof null ? state.city : city,
  }),
  [Types.GET_FAILURE]: (state, { error }) => state.merge({ loading: false, error }),
})

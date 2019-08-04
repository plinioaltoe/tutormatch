/**
 * Types
 */

export const Types = {
  GET_REQUEST: 'tutors/GET_REQUEST',
  GET_SUCESS: 'tutors/GET_SUCESS',
  GET_FAILURE: 'tutors/GET_FAILURE',
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  city: null,
  sort: null,
}

export default function tutors(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true }
    case Types.GET_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        sort: action.payload.sort,
        city: action.payload.city,
      }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  getTutorsRequest: ({ city, sort, all }) => ({
    type: Types.GET_REQUEST,
    payload: { city, sort, all },
  }),

  getTutorsSuccess: ({ data, city, sort }) => ({
    type: Types.GET_SUCESS,
    payload: { data, city, sort },
  }),
  getTutorFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
}

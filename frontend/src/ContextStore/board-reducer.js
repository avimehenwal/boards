import {
  SET_FOR_POLLING,
  UNSET_FOR_POLLING,
  INCREASE_COUNT
} from './board-actions'

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case SET_FOR_POLLING:
      return {
        ...state,
        appdb: { ...state.appdb, poll: true }
      }

    case UNSET_FOR_POLLING:
      return {
        ...state,
        appdb: { ...state.appdb, poll: false }
      }

    case INCREASE_COUNT:
      return {
        ...state,
        appdb: { ...state.appdb, count: action.payload }
      }

    default:
      console.log('No case matched')
  }
}

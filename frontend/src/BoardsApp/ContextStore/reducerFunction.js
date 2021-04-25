import { getUser } from './api'

export const AppDB = {
  stage: 1,         // control Main Views
  family: null,     // loggedIn family view
  id: null,         // userId
  approved: []      // Approved caregivers
}

export function reducerFn(state, action) {
  switch (action.type) {
    case 'NEXT':
      state['stage'] += 1
      return { ...state };
    case 'PREVIOUS':
      state['stage'] -= 1
      return { ...state };
    case 'SET_ID':
      if (action.hasOwnProperty('payload')) {
        state['id'] = action.payload
      }
      return { ...state };
    case 'RESET':
      state['stage'] = 1
      return { ...state };

    case 'SAVE_FAMILIES':
      return state
    case 'SELECTED_FAMILY':
      if (action.hasOwnProperty('payload')) {
        getUser(action.payload)
          .then(userInfo => {
            state['family'] = userInfo
            console.log(state);
          })
      }
      return { ...state };
    case 'APPROVE_CAREGIVER':
      if (action.hasOwnProperty('payload')) {
        state['approved'].push(action.payload)
      }
      return { ...state }
    default:
      console.log('No case matched')
  }
}

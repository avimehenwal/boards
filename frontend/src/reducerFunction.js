export const AppDB = {
  stage: 1,         // control Main Views
  family: null      // loggedIn family view
}

export function reducerFn(state, action) {
  switch (action.type) {
    case 'NEXT':
      state['stage'] += 1
      return { ...state };
    case 'PREVIOUS':
      state['stage'] -= 1
      return { ...state };
    case 'RESET':
      state['stage'] = 1
      return { ...state };

    case 'SELECTED_FAMILY':
      if (action.hasOwnProperty('payload')) {
        state['family'] = action.payload
        return { ...state };
      } else {
        return new Error()
      }
    default:
      console.log('No case matched')
  }
}

import React, { useEffect, useReducer } from 'react'
import AppContext from './board-context'
import { reducerFunction } from './board-reducer'
import {
  SET_FOR_POLLING,
  UNSET_FOR_POLLING,
  INCREASE_COUNT
} from './board-actions'

export const BoardAppState = (props) => {
  const initialState = {
    count: 0,
    poll: true
  }

  const [state, dispatchFn] = useReducer(reducerFunction, initialState)

  const setPollTrue = () => {
    dispatchFn({ type: SET_FOR_POLLING })
  }

  const unsetToPoll = () => {
    dispatchFn({ type: UNSET_FOR_POLLING })
  }

  const increaseCount = () => {
    // const newValue = state.appdb.count + 1
    dispatchFn({ type: INCREASE_COUNT, payload: 10 })
  }

  useEffect(() => {
    console.dir(state);
    dispatchFn({ type: SET_FOR_POLLING })
    console.dir(state);
  }, [])

  return (
    <AppContext.Provider value={{
      appdb: state,
      reducerFn: dispatchFn,
      setPollTrue,
      unsetToPoll,
      increaseCount
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

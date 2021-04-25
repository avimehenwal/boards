import React, { useState, useReducer } from 'react'
import AppContext from './board-context'
import { reducerFunction } from './board-reducer'
import {
  SET_FOR_POLLING,
  UNSET_FOR_POLLING,
  INCREASE_COUNT
} from './board-actions'

export const AppState = (props) => {
  const initialState = {
    count: 0,
    poll: false
  }

  const [state, dispatch] = useReducer(reducerFunction, initialState)

  const setToPoll = () => {
    dispatch({ type: SET_FOR_POLLING })
  }

  const unsetToPoll = () => {
    dispatch({ type: UNSET_FOR_POLLING })
  }

  const increaseCount = () => {
    // const newValue = state.appdb.count + 1
    dispatch({ type: INCREASE_COUNT, payload: 10 })
  }

  return (
    <AppContext.Provider value={{
      appdb: state,
      setToPoll,
      unsetToPoll,
      increaseCount
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

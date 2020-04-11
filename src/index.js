import React from 'react'

const reducer = (state, action) => Object.assign({}, state, action)

export const useStateReducer = (initialState = {}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setState = React.useCallback(
    (data, ctx) => dispatch({ [ctx]: data }),
    [dispatch]
  )

  return [state, setState]
}

export default useStateReducer

import React from 'react'

const reducer = (state, action) =>
  Object.assign({}, state, { [action.type]: action.data })

export const useStateReducer = (initialState = {}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setState = React.useCallback((data, type) => dispatch({ type, data }), [
    dispatch
  ])

  return [state, setState]
}

export default useStateReducer

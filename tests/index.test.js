import { renderHook, act } from '@testing-library/react-hooks'

import { useStateReducer } from '../src'

describe('useStateReducer', () => {
  it('should set data to context', async () => {
    expect.hasAssertions()

    const { result } = renderHook(() => useStateReducer())
    const ctx1 = 'ctx1'
    const ctx2 = 'ctx2'

    expect(result.current[0]).toStrictEqual({})

    act(() => {
      result.current[1](true, ctx1)
    })

    expect(result.current[0]).toStrictEqual({ [ctx1]: true })

    act(() => {
      result.current[1]('data', ctx2)
      result.current[1](false, ctx1)
    })

    expect(result.current[0]).toStrictEqual({
      [ctx1]: false,
      [ctx2]: 'data'
    })
  })
})

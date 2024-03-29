const deepFreeze = require('deep-freeze')
const counterReducer = require('./reducer')

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok and bad are incremented', () => {
    const action = {
      type: 'OK'
    }

    const action1 = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    let newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })

    newState = counterReducer(newState, action1)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 1
    })
  })
})
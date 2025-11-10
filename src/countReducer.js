export default function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return state + 1
    }
    case 'decrement': {
      return state - 1
    }

    case 'incrementByAmount': {
      return state + Number(action.payload.amount)
    }
    default:
      return state
  }
}


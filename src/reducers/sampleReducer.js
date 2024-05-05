// all reducers have 2 params
// 1. current state
// 2. info that comes from actions
const feedData = [
  {
    food: 'Pizza',
    quantity: 21
  },
  {
    food: 'Burgers',
    quantity: 25
  },
  {
    food: 'Cakes',
    quantity: 30
  }
]

const sampleReducer = (state = feedData, action) => {
  // console.log('Sample Reducer is running')
  // console.log(action)
  if (action.type === 'Update Sample') {
    let newState = [...state]
    if (action.payload.operation === '+') {
      newState[action.payload.index].quantity++
    } else if (action.payload.operation === '-') {
      newState[action.payload.index].quantity--
    }
    return newState;
  } else if (action.type === 'clear inventory') {
    let newState = [...state]
    newState.forEach((item, i) => {
      item.quantity = 0
    })
    return newState;
  } else {
    return state
  }
}

export default sampleReducer

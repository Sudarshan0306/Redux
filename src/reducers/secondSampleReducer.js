// all reducers have 2 params
// 1. current state
// 2. info that comes from actions
const feedData = [
  {
    food: 'Sandwich',
    quantity: 240
  },
  {
    food: 'coffee',
    quantity: 251
  },
  {
    food: 'pan cakes',
    quantity: 130
  }
]

const secondSampleReducer = (state = feedData, action) => {
  // console.log('Second Reducer is running');
  // console.log(action);
  if (action.type === 'Updating Second Inventory') {
    const newState = [...state]
    const payload = action.payload
    newState[payload.index].quantity += payload.qChange
    return newState
  } else if (action.type === 'clear inventory') {
    let newState = [...state]
    newState.forEach((item, i) => {
      item.quantity = 0
    })
    return newState
  } else {
    return state
  }
}

export default secondSampleReducer

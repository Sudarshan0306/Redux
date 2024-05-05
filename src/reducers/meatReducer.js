// all reducers have 2 params
// 1. current state
// 2. info that comes from actions
const feedData = [
  {
    food: 'chicken breast',
    quantity: 240
  },
  {
    food: 'chicken tandoor',
    quantity: 251
  },
  {
    food: 'mahi mahi',
    quantity: 130
  },
  {
    food: 'salmon',
    quantity: 130
  }
]

const meatReducer = (state = feedData, action) => {
  // console.log('Meat Reducer is running');
  // console.log(action);
  if (action.type === 'updateMeat') {
    let newState = [...state]
    if (action.payload.operation === '+') {
      newState[action.payload.index].quantity++
    } else if (action.payload.operation === '-') {
      newState[action.payload.index].quantity--
    }
    return newState
  } else if (action.type === 'clear inventory') {
    let newState = [...state]
    newState.forEach((item, i)=> {
        item.quantity = 0
    });
    return newState;
  } else {
    return state
  }
}

export default meatReducer

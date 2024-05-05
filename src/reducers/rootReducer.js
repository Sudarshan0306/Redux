// this is a root reducers it is the store manager for all the reducers

//to make a rootReducer, get a method from redux, called "CombineReducers";
import { combineReducers } from "redux";


import sampleReducer from "./sampleReducer";
import secondSampleReducer from "./secondSampleReducer";
import meatReducer from "./meatReducer";


//get each individual reducer
const rootReducer = combineReducers({

    // each key in combinRreducer will be a piece of state in the redux store
    // each value, will be the value of that piece of state in the redux store
    sample: sampleReducer,
    secondSample: secondSampleReducer,
    meat: meatReducer
});


export default rootReducer;
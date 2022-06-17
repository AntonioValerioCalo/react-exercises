import {createStore} from 'redux'
import{ counterReducer,inncrementCounter,decrementCounter,resetCounter} from "./CounterReducer"

 export const store = createStore(counterReducer)
 
 store.dispatch(inncrementCounter(1))
 store.dispatch(decrementCounter(6))
 store.dispatch(resetCounter(0))
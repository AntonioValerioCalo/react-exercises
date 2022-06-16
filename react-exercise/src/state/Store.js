import {configureStore} from '@redux.js/toolkit'
import{ counterReducer,inncrementCounter,decrementCounter,resetCounter} from "./CounterReducer"

 export const store = configureStore({reducer:counterReducer})
 
 store.dispatch(inncrementCounter(1))
 store.dispatch(decrementCounter(6))
 store.dispatch(resetCounter(0))
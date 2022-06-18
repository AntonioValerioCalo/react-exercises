import {createStore,combineReducers} from 'redux'
import { counterState } from './CounterReducer'

import { userReducer } from './TodosReducer'
 
 const rootReducer=combineReducers({
    counter:counterState,
    user:userReducer,
})
 export const store = createStore(rootReducer)
 
//  store.dispatch(inncrementCounter(1))
//  store.dispatch(decrementCounter(6))
//  store.dispatch(resetCounter(0))
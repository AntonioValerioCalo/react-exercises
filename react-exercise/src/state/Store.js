import {createStore,combineReducers} from 'redux'
import { counterState } from './CounterReducer'

import { todosReducer} from './TodosReducer'
 
 const rootReducer=combineReducers({
    counter:counterState,
    user:todosReducer,
})
 export const store = createStore(rootReducer)
 
//  store.dispatch(inncrementCounter(1))
//  store.dispatch(decrementCounter(6))
//  store.dispatch(resetCounter(0))
import {createStore,combineReducers} from 'redux'
import{ counterReducer,inncrementCounter,decrementCounter,resetCounter} from "./CounterReducer"
import { userReducer } from './TodosReducer'
 
 const rootReducer=combineReducers({
    counter:counterReducer,
    user:userReducer,
})
 export const store = createStore(rootReducer)
 
 store.dispatch(inncrementCounter(1))
 store.dispatch(decrementCounter(6))
 store.dispatch(resetCounter(0))
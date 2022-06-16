const defaulState=0;

const INCREMENT="COUNTER@INCREMENT"
const DECREMENT="COUNTER@DECREMENT"
const RESET="COUNTER@RESET"

export function inncrementCounter(by=1){
return{
    type:INCREMENT,
    payload:by,
}
}

export function decrementCounter(by=1){
  return{  type:DECREMENT,
    payload:by,
}
}

export function resetCounter(){
    return{
        type:RESET,
    }
}

export function counterReducer(state=defaulState,action){
    switch(action.type){
        case INCREMENT:{
         return state + action.payload
        }
        case DECREMENT:{
            return state - action.payload
        }
        case RESET:{
            return defaulState
        } 
        default:{
            return state 
        }
        
     
    }
}
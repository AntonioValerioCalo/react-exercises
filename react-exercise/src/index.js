import ReactDom from "react-dom";

import "./index.css";
import Root from "./Root";
import {store} from "./state/Store"
import { counterState } from "./state/CounterReducer";
import { todosReducer} from "./state/TodosReducer";

const root = document.querySelector("#root");
// ReactDom.render(<Root />, root);



store.subscribe(()=>{
    console.log(store.getState());
   
})

store.dispatch(counterState.actions.increment(100))
store.dispatch(todosReducer.actions.add({id:3,names:"Antonio Valerio Calò",age:28}))


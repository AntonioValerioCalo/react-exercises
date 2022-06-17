import ReactDom from "react-dom";

import "./index.css";
import Root from "./Root";
import {store} from "./state/Store"
import {inncrementCounter} from "./state/CounterReducer"

const root = document.querySelector("#root");
// ReactDom.render(<Root />, root);



store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(inncrementCounter(22))


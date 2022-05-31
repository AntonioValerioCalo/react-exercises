
import { useCounter } from "./UseCounter";




export function HookCounter(initialValue = 0) {
  const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue);

  return (
    <div>
      <h1>HooksCounter</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={onIncrement}>increment</button>
      <button type="button" onClick={onDecrement}>decrement</button>
      <button type="button" onClick={onReset}>reset</button>
    </div>
  );
}

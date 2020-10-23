import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 0);
    return(
        <div>
            <h2>Counter implementation using Reducer Hook</h2>
            <h2>Counter value is: {state}</h2>
            <button onClick={()=>{dispatch(state> 0 ?'DECREMENT': 'DEFAULT')}}>Decrement</button>
            <button onClick={()=>{dispatch('INCREMENT')}}>Increment</button>
        </div>
    );
}

export default Child2;
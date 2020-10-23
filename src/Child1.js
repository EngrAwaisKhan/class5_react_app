import React, { useState } from 'react';

const Child1 = () => {
    let countstate = useState(0); // actually usestate is array i.e [state, setstate]
    return(
        <div>
            <h2>Counter implementation using Context API</h2>
            <h2>Counter value is:{countstate[0]}</h2>
            <button onClick={()=>{countstate[1](countstate[0]> 0 ? --countstate[0] : countstate[0])}}>Decrement</button>
            <button onClick={()=>{countstate[1](++countstate[0])}}>Increment</button>
            <hr/>
        </div>
    );
}

export default Child1;
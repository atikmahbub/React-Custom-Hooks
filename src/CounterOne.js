import React from 'react'
import useCounter from './hooks/useCounter'

function CounterOne() {
    const [count , incrementCount , decrementCount , reset] = useCounter(0 , 2 , 2, 0)
    return (
        <div>
            Count = {count}
            <br/>
            <button onClick={incrementCount}>Increment</button>
            <button onClick ={decrementCount}>Decrement</button>
            <button onClick = {reset}>reset</button>
        </div>
    )
}

export default CounterOne

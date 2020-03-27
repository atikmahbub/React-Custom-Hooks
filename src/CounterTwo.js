import React from 'react'
import useCounter from './hooks/useCounter'

function CounterTwo() {
    const [count , incrementCount , decrementCount , reset] = useCounter(10, 10,10,10)
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

export default CounterTwo


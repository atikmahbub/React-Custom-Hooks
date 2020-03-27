import React from 'react'

function useCounter(initialState , value , value1 ,res) {
    const [count, setCount] = React.useState(initialState)

    const incrementCount = () =>{
        setCount(count + value)
    }
    const decremenentCount = () =>{
        setCount(count - value1)
    }
    const reset = () =>{
        setCount(res)
    }
    return [count, incrementCount , decremenentCount , reset]
}

export default useCounter

import React from 'react'

function useInput(initialState) {
    const [value , setValue] = React.useState(initialState)

    const reset = () =>{
        setValue(initialState)
    }

    const bind = {
        value,
        onChange : e =>{
            setValue(e.target.value)
        }
    }
    return [value , bind , reset]
}

export default useInput

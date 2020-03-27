import React from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocumentTitleOne() {

    const [counter , setCounter] = React.useState(0)
    useDocumentTitle(counter)
    return (
        <div>
            <button onClick = { () =>setCounter(counter+1)}>Count {counter}</button>
        </div>
    )
}

export default DocumentTitleOne

import React from 'react'

function useDocumentTitle(counter) {

    React.useEffect(()=>{
        document.title = `Counter ${counter}`
    })
}

export default useDocumentTitle

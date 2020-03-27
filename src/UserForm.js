import React from 'react'
import useInput from './hooks/useInput'

function UserForm() {
    const [firstName , bindFirstName , resetFirst] = useInput('')
    const [lastName , bindLastName , resetLast] = useInput('')

    const submitHandler =() =>{
        alert(`First Name :  ${firstName} , Last Name : ${lastName}`)
        resetFirst()
        resetLast()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name:</label>
                <br/>
                <input {...bindFirstName}/>
                <br/>
                <label>Last Name:</label>
                <br/>
                <input {...bindLastName} />
                <br/>
                <input type="submit" value = "submit"/>
            </form>
        </div>
    )
}

export default UserForm

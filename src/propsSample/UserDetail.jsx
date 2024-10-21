import React from 'react'

function UserDetail(props) {

    return <>
        <h1>Name: {props.name}</h1>
        <h1>Surname: {props.surname}</h1>
        <h1>Age: {props.age}</h1>
        <hr />
        <h1>Address</h1>
        <h2>Street: {props.address.street}</h2>
        <h2>City: {props.address.city}</h2>
        <hr />
        <button onClick={props.hello}>Click Props Function Test </button>

    </>
}

export default UserDetail

import React from 'react'
import Child from './Child'

function Parent(props) {
    return <>
        <h2>Parent Component</h2>
        <hr />
        <Child name={props.name} />
    </>
}

export default Parent
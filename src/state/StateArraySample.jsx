import React, { useState } from 'react'

function StateArraySample() {

    const [numbers, setnumbers] = useState([3, 5, 11, 2])

    return <>
        <h1>Length: {numbers.length}</h1>
        <hr />
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
        <hr />
        <button onClick={() => setnumbers([])}>Empty</button>
    </>
}

export default StateArraySample
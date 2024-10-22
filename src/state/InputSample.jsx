import React, { useState } from 'react'

function InputSample() {

    const [name, setname] = useState("")

    return <>
        <h1>Name: {name}</h1>
        <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
    </>
}

export default InputSample
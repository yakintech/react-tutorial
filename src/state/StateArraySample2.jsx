import React, { useState } from 'react'

function StateArraySample2() {

    const [number, setnumber] = useState("")
    const [numbers, setnumbers] = useState([])

    const add = () => {

        if(numbers.includes(Number(number)))
            return

        setnumbers([...numbers, Number(number)])
        //ekledikten sonra input içerisini boşaltıyorum
        setnumber("")
    }

  return <>
    <div>
        <label htmlFor="">Number: </label>
        <input value={number} onChange={(e) => setnumber(e.target.value)} />
    </div>
    <div>
        <button onClick={add}>Add</button>
    </div>
    <hr />
    <ul>
        {
            numbers.map(item => <li>{item}</li>)
        }
    </ul>
  </>
}

export default StateArraySample2
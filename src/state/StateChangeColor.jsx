import React, { useState } from 'react'

function StateChangeColor() {

    //number,string,array,object...
    const [color, setcolor] = useState("red")

    return <>
        <button onClick={() => setcolor("black")}>Change Color</button>
        <div style={{ width: 200, height: 200, borderStyle: "solid", backgroundColor: color }}>

        </div>
    </>
}

export default StateChangeColor
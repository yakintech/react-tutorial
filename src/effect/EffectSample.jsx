import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [number, setnumber] = useState(0)
     console.log("Effect sample rendered!")


    useEffect(() => {
        console.log("Useeffect run!")
        var randomNumber = Math.floor(Math.random() * 10000)
        setnumber(randomNumber)
    }, [])


    return <>
        <h1>Number: {number}</h1>
    </>
}

export default EffectSample
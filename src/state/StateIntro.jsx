import React, { useState } from 'react'

function StateIntro() {
    //counter değişkenimin kendisi
    //setCounter ise değişkeni DEĞİŞTİRECEK FONKSİYON
    const [counter, setCounter] = useState(0)

    console.log("State Intro component rendered!")

    const increase = () => {
        setCounter(counter + 1) // counter = counter + 1
        //setCounter(20)
    }


    return <>
        <h1 id='title'>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
}

export default StateIntro

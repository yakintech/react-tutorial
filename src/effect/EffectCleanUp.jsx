import React, { useEffect } from 'react'

function EffectCleanUp() {

    useEffect(() => {

        let interval = setInterval(() => {
            console.log("Hello!")
        }, 1000);

        return () => {
            clearInterval(interval)
        }

    }, [])


    return <>

    </>
}

export default EffectCleanUp
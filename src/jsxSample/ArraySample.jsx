import React from 'react'

function ArraySample() {

    var names = ["Çağatay", "Ahmet", "Ayşe", "Ece"]



    return <>
        <ul>
            {
                names.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

export default ArraySample
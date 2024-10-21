import React from 'react'

function JsxEvents() {


    const hello = () => {
        alert("Hello Reactjs")
    }


    return <>
        {/* Problemli button. Sayfada butona tıklamadan kendisi otomatik render sırasında click eventini çalıştıracak */}
        {/* <button onClick={hello()}>Hello</button> */}
        <hr />
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello-2</button>
    </>
}

export default JsxEvents
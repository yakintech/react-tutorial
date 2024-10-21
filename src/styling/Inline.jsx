import React from 'react'

function Inline() {

    var h1Style = {
        backgroundColor:"red",
        color:"white"
    }

  return <>
    
    <h1 style={{color:"blue", backgroundColor:"yellow"}}>Turkcell Teknoloji</h1>
    <hr />
    <h1 style={h1Style}>Türkiye</h1>
  </>
}

export default Inline
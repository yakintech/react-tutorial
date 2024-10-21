import React from 'react'

function Child(props) {
  return <>
    <h3>Child</h3>
    <h3>Name: {props.name}</h3>
  </>
}

export default Child
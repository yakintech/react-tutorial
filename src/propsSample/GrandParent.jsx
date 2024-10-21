import React from 'react'
import Parent from './Parent'

function GrandParentComponent(props) {
  return <>
    <h1>Grand Parent Component</h1>
    <hr />
    <Parent name={props.name} />
  </>
}

export default GrandParentComponent
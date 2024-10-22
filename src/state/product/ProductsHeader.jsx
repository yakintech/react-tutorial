import React from 'react'

function ProductsHeader(props) {
  return <>
    <hr />
    <h1>Length: {props.length}</h1>
    <button onClick={props.empty}>Empty</button>
    <button onClick={props.refresh}>Refresh</button>
    <hr />
    <div>
      <label htmlFor="">Search: </label>
      <input type='text' onChange={(e) => props.search(e.target.value)} />
    </div>
    <hr />
  </>
}

export default ProductsHeader
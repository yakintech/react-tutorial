import React from 'react'

function OneWayBindingSample() {

  var name = "Çağatay"
  var age = 18
  var country = "Turkey"

  var user = {
    name: "Aykut",
    address: "Beşiktaş / İstanbul"
  }

  return <>
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    <h1>Country: {country}</h1>
    <hr />
    <h1>User Name: {user.name}</h1>
    <h1>User Address: {user.address}</h1>
  </>
}

export default OneWayBindingSample
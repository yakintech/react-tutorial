import React from 'react'
import UserDetail from './propsSample/UserDetail'



function App() {

  var address = {
    street: "Süleyman Seba Cad.",
    city:"İstanbul"
  }

  return <UserDetail name="Ece" surname="Yıldız" age={18} address={address} />

}

export default App
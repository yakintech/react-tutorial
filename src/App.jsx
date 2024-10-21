import React from 'react'
import UserDetail from './propsSample/UserDetail'
import JsxEvents from './jsxSample/JsxEvents'
import GrandParentComponent from './propsSample/GrandParent'
import Suppliers from './propsSample/Suppliers'

function App() {

  var address = {
    street: "Süleyman Seba Cad.",
    city: "İstanbul"
  }


  const hello = () => {
    alert("Hello props!")
  }

  return <>
  <Suppliers/>
    {/* <GrandParentComponent name="Yeşim" /> */}
  </>

}

export default App
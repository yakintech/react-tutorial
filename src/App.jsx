import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'


function App() {

  return <>
    <h1>Header</h1>
    <hr />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <hr />
    <h1>Footer</h1>
  </>
}

export default App
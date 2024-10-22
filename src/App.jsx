import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import EffectSample from './effect/EffectSample'
import EffectCleanUp from './effect/EffectCleanUp'
import EffectDependency from './effect/EffectDependency'

function App() {


  return <EffectDependency/>

  return <>
    <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '1rem', justifyContent:'space-between' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</Link></li>
        <li><Link to="/products" style={{ textDecoration: 'none', color: '#007bff' }}>Products</Link></li>
        <li><Link to="/effect-cleanup" style={{ textDecoration: 'none', color: '#007bff' }}>Effect Cleanup</Link></li>

      </ul>
    </nav>
    <hr />
    <div style={{ padding: '1rem' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/effect-cleanup' element={<EffectCleanUp/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    <hr />
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
      <h1>Footer</h1>
    </footer>
  </>
}

export default App
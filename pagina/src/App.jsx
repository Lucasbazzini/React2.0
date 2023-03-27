import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'

function App() {

  const [productos, setProductos] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data)
      })
  }, [])
  console.log(productos);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path='/productos' element={<ProductList productos={productos}/>}/>
      </Routes>
      
    </div>
  )
}

export default App

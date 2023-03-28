import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'
import CardDetail from './components/CardDetail'

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
        <Route path='productos/:id' element={<CardDetail/>}/>
      </Routes>
      
    </div>
  )
}

export default App

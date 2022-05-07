import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import { useState } from "react"
function App() {
  const [cartHasProducts, setCartHasProducts] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          {/* REDIRECT ROUTES */}
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="/checkout"
            element={
              cartHasProducts ? <p>checkoutPage</p> : <Navigate to="/products" /> 
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

//https://www.youtube.com/watch?v=WfpmvgVZD1A&list=PL4cUxeGkcC9h7F1LWaQ7MAI8ptg5VjvxJ
//https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
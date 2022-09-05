import React from 'react'
import logo from './logo.svg';
import Home from "./pages/Home"
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success'
function App() {

  const user = true;
  return (<Router>
    
    <Routes>

          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/success" element={<Success/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>  
          <Route exact path="/products" element={<ProductList/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>    
          <Route exact path="/products/:category" element={<ProductList/>}/>     

      </Routes>

    
    </Router>
  )


}

export default App;

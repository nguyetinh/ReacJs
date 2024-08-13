// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Layout/Header';
import NewPro from './Components/Layout/NewPro';
import Products from './Components/Products/Products';
import Footer from './Components/Layout/Footer';
import ProDetail from './Components/Detail/Detail';
import Cart from './Components/Cart';
import Dangnhap from './Components/Account/Dangnhap';
// import Login from './Components/Account/Login';

const App = () => {
    return (
        <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<NewPro />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/category/:category" element={<Products />} />
                    <Route path="/Detail/:id" element={<ProDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/Dangnhap" element={<Dangnhap />} />
                    {/* <Route path="/Login" element={<Login />} /> */}

                    {/* <Route path="/brand" element={<Brand />} />
                    <Route path="/" element={<Brand />} /> */}
                </Routes>
                <Footer/>
        </Router>
    );
};

export default App;

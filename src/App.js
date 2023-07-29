import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import NavBar from "./components/Navbar"
import About from "./pages/About"
import Cart from "./pages/Cart/Cart"
import Category from './pages/Products/Category';
import Login from "./pages/Register_Login/Login"
import Register from "./pages/Register_Login/Register"
import Account from "./pages/Register_Login/Account"
import Footer from './components/Footer';
import MainCategory from './pages/Products/MainCategory';
import ProductDetail from './pages/Products/ProductDetail';

import { ShopContextProvider } from './context/productContext/shop-context';
import Provider from "./context/UserContext/Provider"

function App() {
  return (
    <div className="App">
    <Provider>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Category' element={<Category/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Account' element={<Account/>}/>
            <Route path='/MainCategory' element={<MainCategory/>}/>
            <Route path='/MainCategory/ProductDetail' element={<ProductDetail/>}/>
          </Routes>
          <Footer/>
        </Router>
        </ShopContextProvider>
    </Provider>
    </div>
  );
}

export default App;

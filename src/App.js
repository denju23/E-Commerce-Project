import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from './pages/About';
import Mail from './pages/Mail';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';
import ViewCart from './pages/ViewCart';
import PlaceOrder from './pages/PlaceOrder';
import ThankYou from './pages/ThankYou';
import ViewOrder from './pages/ViewOrder';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ForgotPass from './pages/ForgotPass';
import { Nav } from 'react-bootstrap';
import ProductFilter from './pages/ProductsFilter';



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Header />
      <Router>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Mail" element={<Mail />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Products" element={<Products />} />
          <Route  path="/ProductDetails/:id" element={<ProductDetails/>}/>
          <Route path="/ProductFilter/:subid" element={<ProductFilter/>}/>
          <Route path="/ViewCart" element={<ViewCart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/ViewOrder" element={<ViewOrder />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Home from "./Pages/Home";
import HomeCate from "./Pages/HomeCate";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Medicine from "./Pages/Medicine";
import Contact from "./Pages/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home category="Home" />} />
          <Route path='/Medicine' element={<Medicine category="Medicine" />} />
          <Route path='/Lab-Test' element={<HomeCate category="Lab Test" />} />
          <Route path='/Contact' element={<Contact category="Contact" />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Product/:ProductID' element={<Product />} /> 
          <Route path='/Cart' element={<Cart />} />
          <Route path='/LoginSignUp' element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

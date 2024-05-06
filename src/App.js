import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Login from './meenakshiProject/pages/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Layout from "./meenakshiProject/layout/Layout.js";
import Signup from './meenakshiProject/pages/signup';
import Forgotpassword from './meenakshiProject/pages/forgotPassword';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<Forgotpassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

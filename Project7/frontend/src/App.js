import React, { useState } from 'react';
import './App.css';
import Header from "./Component/Header/Header"
import {Routes, Route, Navigate } from 'react-router-dom';
import Home from './Component/Home/Home';
import Category from './Component/Category/Category';

import PostPage from './Component/PostPage/PostPage';
//import Navbar from './Component/Navbar/Navbar';


function App() {
  
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route  path='/home' element={<Home />} />
          <Route path='/:category'  element={<Category />} />
          <Route path='/:category/:id' element={<PostPage />} /> 
        </Routes>

      </div>
  );
}

export default App;

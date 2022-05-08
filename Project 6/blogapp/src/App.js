import './App.css';
import Header from "./Component/Header/Header"
import {Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./Component/Footer/Footer"
import Home from './Component/Home/Home';
import CategoryPage from './Component/CategoryPage/CategoryPage';
import PostPage from './Component/PostPage/PostPage';


function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route  path='/home' element={<Home />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/:category/:id' element={<PostPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
  );
}

export default App;

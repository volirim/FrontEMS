import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from './pages/Join/Join';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';
import Council from './pages/Council/Council';
import Contacts from './pages/Contacts/Contacts';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <div className='appContainer'>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/join" element={<Join></Join>}></Route>
          <Route path="/council" element={<Council></Council>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
    </div>
      
  </BrowserRouter>  
);

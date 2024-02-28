import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/main.min.css';

import Header from './views/sections/Header';
import Footer from './views/sections/Footer';
import Home from './views/Home';
import Error from './views/Error';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <div className="wrapper">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)

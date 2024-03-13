import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/main.min.css';

import Home from './views/Home';
import Error from './views/Error';
import Contact from './views/Contact';
import News from './views/News';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#features" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './templates/Home';
import { InformationUser } from './templates/InformationUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/information" element={<InformationUser />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();

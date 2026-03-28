import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage.js';
import LoginPage from './LoginPage.js';
import FlavorsPage from './FlavorsPage.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/flavors" element={<FlavorsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

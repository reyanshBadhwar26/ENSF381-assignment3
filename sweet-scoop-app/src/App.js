import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage.js';
import LoginPage from './LoginPage.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

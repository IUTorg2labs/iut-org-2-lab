import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compound from './pages/Compound';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/compound/:id" element={<Compound />} />
  </Routes>
);

export default App;
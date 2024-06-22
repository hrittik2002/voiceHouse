import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navigation from './components/General/Navigation';
import './App.css';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

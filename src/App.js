import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <Routes>dropDVideo
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog1 from './pages/Blogpage1';
import Blog2 from './pages/Blogpage2';
import Blog3 from './pages/Blogpage3';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogpage1" element={<Blog1 />} />
        <Route path="/Blogpage2" element={<Blog2 />} />
        <Route path="/Blogpage3" element={<Blog3 />} />
      </Routes>
    </Router>
  );
}

export default App;

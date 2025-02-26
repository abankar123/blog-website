import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<BlogPost />} />
    </Routes>
  </Router>
);

export default App;

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componnts/Navbar/Navbar'
import Home from './componnts/Home/Home'
import About from './componnts/About/About'
import Experience from './componnts/Experience/Experience'
import Project from './componnts/Project/Project'
import Contact from './componnts/Contact/Contact'

const App = () => {
<<<<<<< HEAD
  const url = 'http://localhost:1000';
=======
  const url = 'https://my-portfolio-deepa.onrender.com';
>>>>>>> 7878e18bc9f1dda25a2e84e6cccd0d21111c2d1d
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

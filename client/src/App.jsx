import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default App;

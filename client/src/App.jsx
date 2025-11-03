import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./Ui/ScrollToTop";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Starfield from "./Ui/Starfield";
import BottomGlowLine from "./Ui/BottomGlowLine";

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 🌌 Background starfield */}
      <div className="fixed inset-0 z-0">
        <Starfield />
      </div>

      
  <div className="relative z-10">
      <ScrollToTop />

      {/* Navbar (hidden on home if needed) */}
      {!hideNavbarFooter && <Navbar />}

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Bottom glowing line */}
      <BottomGlowLine />
    </div>
    </div>
    
  );
};

export default App;

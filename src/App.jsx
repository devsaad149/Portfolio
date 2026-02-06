import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CaseStudies from './components/CaseStudies';

import Portfolio from './components/Portfolio';

const Home = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Experience />
    <Achievements />
    <Education />
    <Contact />
  </main>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.5rem',
        letterSpacing: '0.2em'
      }}>
        LOADING...
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <CustomCursor />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

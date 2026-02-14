import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import ThreeScene from './components/ThreeScene';
import Home from './components/Home';
import HSQTowers from './components/case-studies/HSQTowers';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <Router basename="/Portfolio">
      <ReactLenis root>
        <div className="App">
          <CustomCursor />
          <ScrollProgress />
          <ScrollToTop />
          <ThreeScene />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies/hsq-towers" element={<HSQTowers />} />
          </Routes>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;

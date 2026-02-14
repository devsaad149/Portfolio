import React, { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import VideoDirection from './components/VideoDirection';
import OOH from './components/OOH';
import BrandGuidelines from './components/BrandGuidelines';
import CaseStudies from './components/CaseStudies';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <CustomCursor />
        <ScrollProgress />
        <ThreeScene />

        <main>
          <Hero />
          <FeaturedWork />
          <VideoDirection />
          <OOH />
          <BrandGuidelines />
          <CaseStudies />
          <Expertise />
          <Experience />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;

import React from 'react';
import Hero from './Hero';
import FeaturedWork from './FeaturedWork';
import VideoDirection from './VideoDirection';
import OOH from './OOH';
import BrandGuidelines from './BrandGuidelines';
import CaseStudies from './CaseStudies';
import Expertise from './Expertise';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
    return (
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
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-brand-white font-sans selection:bg-brand-accent selection:text-brand-black overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

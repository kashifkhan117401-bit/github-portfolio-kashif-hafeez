import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroOverview from './components/HeroOverview';
import Repositories from './components/Repositories';
import TechMatrix from './components/TechMatrix';
import CommitHistory from './components/CommitHistory';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to update active section in header tabs
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'repositories', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#1f6feb] selection:text-white">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <HeroOverview />

        <Repositories />

        <TechMatrix />

        <CommitHistory />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

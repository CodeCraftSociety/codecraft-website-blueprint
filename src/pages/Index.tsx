
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CommunitiesSection from '../components/CommunitiesSection';
import CoursesSection from '../components/CoursesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'CodeCraft Society | Where Ideas Turn into Innovation';
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-codecraft-dark text-white"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CommunitiesSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;

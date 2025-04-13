import React from 'react';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1A1F2C] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-codecraft-dark/50 to-codecraft-dark"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => <div key={i} className={`absolute rounded-full bg-codecraft-orange/20 animate-pulse`} style={{
          width: `${Math.random() * 30 + 10}px`,
          height: `${Math.random() * 30 + 10}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 2}s`,
          animationDelay: `${Math.random() * 3}s`
        }}></div>)}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.div className="flex justify-center mb-8" initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            <img alt="CodeCraft Logo" className="h-32 md:h-40 animate-float" src="/lovable-uploads/133d722d-3220-4a11-9b7e-1b6ca2ef18a0.png" />
          </motion.div>
          
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }}>
            CodeCraft Society
          </motion.h1>
          
          <motion.p className="text-xl md:text-2xl text-white/90 mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }}>
            Where Ideas Turn into Innovation
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 0.8
        }}>
            <a href="https://forms.gle/tuJTc2rzK8jA14U4A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-codecraft-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-all shadow-lg hover:shadow-codecraft-orange/20 text-lg">
              Join the Community
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import Hero3D from "./Hero3D";

export default function Home() {
  const homeRef = useRef(null);
  const [showSubtitle, setShowSubtitle] = useState(false);
  
  useEffect(() => {
    const homeElement = homeRef.current;
    if (!homeElement) return;
    
    // Create floating elements
    const createFloatingElements = () => {
      const container = document.createElement('div');
      container.className = 'floating-elements';
      
      for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = `floating-element floating-element-${i % 3}`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(element);
      }
      
      homeElement.appendChild(container);
    };
    
    createFloatingElements();
    
    // Mouse move effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      const background = document.querySelector('.background-elements');
      if (background) {
        background.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      const floatingElements = document.querySelector('.floating-elements');
      if (floatingElements) {
        floatingElements.remove();
      }
    };
  }, []);

  const handleAvatarClick = () => {
    setShowSubtitle(true);
  };

  return (
    <section id="home" className="page home-page" ref={homeRef}>
      {/* Background elements */}
      <div className="background-elements">
        <div className="wave"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
      <div className="home-inner">
        <div className="home-content">
          <motion.h1
            className="home-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="accent">Prajjwal Kumar Singh</span>
          </motion.h1>

          {showSubtitle && (
            <motion.p
              className="home-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Full-Stack Web Developer
            </motion.p>
          )}

          <motion.div
            className="home-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>Highly motivated and results-driven Full-Stack Developer with experience in designing, developing, and deploying scalable web applications. Proficient in the MERN stack (MongoDB, Express, React, Node.js) and committed to writing clean, maintainable, and efficient code.</p>
          </motion.div>

          <motion.div
            className="home-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn secondary" href="/Prajjwal-Resume.pdf" download>
              Download Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="avatar-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onClick={handleAvatarClick}
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}

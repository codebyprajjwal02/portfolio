import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

/*
  Navbar shows scroll links and theme toggle button. 
  Links scroll to sections using IDs. The toggle uses useTheme() from context.
  Navbar stays fixed at top with scroll effect and highlights active section.
*/

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const navbar = document.querySelector('.navbar-wrapper');
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Prajjwal
        </div>

        <div className="nav-links">
          <button className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={() => scrollToSection("home")}>Home</button>
          <button className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={() => scrollToSection("about")}>About</button>
          <button className={`nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={() => scrollToSection("skills")}>Skills</button>
          <button className={`nav-link ${activeSection === "projects" ? "active" : ""}`} onClick={() => scrollToSection("projects")}>Projects</button>
          <button className={`nav-link ${activeSection === "experience" ? "active" : ""}`} onClick={() => scrollToSection("experience")}>Experience</button>
          <button className="resume-btn" onClick={() => window.open('/Prajjwal-Resume.pdf', '_blank')}>
            Resume
          </button>
          <button className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={() => scrollToSection("contact")}>Contact</button>
        </div>

        <div className="nav-actions">
          <button className="btn small toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}

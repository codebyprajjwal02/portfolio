import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

/*
  Navbar shows scroll links and theme toggle button. 
  Links scroll to sections using IDs. The toggle uses useTheme() from context.
  Navbar stays fixed at top with scroll effect.
*/

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    const navbar = document.querySelector('.navbar-wrapper');
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
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
          <button className="nav-link" onClick={() => scrollToSection("home")}>Home</button>
          <button className="nav-link" onClick={() => scrollToSection("about")}>About</button>
          <button className="nav-link" onClick={() => scrollToSection("skills")}>Skills</button>
          <button className="nav-link" onClick={() => scrollToSection("projects")}>Projects</button>
          <button className="nav-link" onClick={() => scrollToSection("testimonials")}>Testimonials</button>
          <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>
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

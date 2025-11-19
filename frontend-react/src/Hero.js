import React from "react";
import { useTheme } from "./ThemeContext";
import "./Home.css";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="home">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={theme === "dark" ? "/dark-bg.mp4" : "/light-bg.mp4"} type="video/mp4" />
      </video>

      <div className="overlay">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Hello, I'm <span className="highlight">Prajjwal Singh</span></h1>
        <p>A passionate Full Stack Developer 🚀</p>
        <a href="/Prajjwal-Resume.pdf" download className="resume-btn">Download Resume</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}

export default Home;

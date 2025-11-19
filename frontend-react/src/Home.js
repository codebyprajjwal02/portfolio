import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <section id="home" className="page home-page">
      <div className="home-inner">
        <motion.div 
          className="profile-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.jpg"
            alt="Prajjwal"
            className="profile"
          />
        </motion.div>

        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <span className="accent">Prajjwal Kumar Singh</span>
        </motion.h1>

        <motion.p
          className="home-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-stack Developer | React Specialist | Cloud Enthusiast
        </motion.p>

        <motion.div
          className="home-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even if you don't hire me, these qualities should characterize whatever website or app you use.</p>
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
          <a className="btn secondary" href="#contact">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

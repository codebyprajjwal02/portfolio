import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Photo */}
        <motion.div
          className="about-image"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/prajj.png" alt="Prajjwal Singh" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="about-text"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3>Hello, I'm Prajjwal Singh</h3>
          <motion.p
            className="about-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I am a passionate Web Developer with expertise in building modern
            and responsive web applications. I focus on creating solutions that
            provide excellent user experiences across all devices.
          </motion.p>
          <motion.p
            className="about-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            My skill set includes <strong>React, Node.js, Express, MongoDB, TailwindCSS, and Framer Motion</strong>. I love transforming ideas into functional applications and continuously learning new technologies to improve my craft.
          </motion.p>
          <motion.a
            href="/Prajjwal-Resume.pdf"
            target="_blank"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

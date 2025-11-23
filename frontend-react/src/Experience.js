import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    description: "Led development of multiple web applications using React, Node.js, and MongoDB. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "Jun 2020 - Dec 2021",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement pixel-perfect interfaces.",
    technologies: ["React", "TypeScript", "CSS", "Redux"]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    duration: "Mar 2019 - May 2020",
    description: "Built and maintained client websites using HTML, CSS, and JavaScript. Implemented responsive designs and optimized site performance.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
            </div>
            <div className="experience-duration">{exp.duration}</div>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-tech">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
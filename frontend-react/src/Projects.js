import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TailwindCSS.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    url: "https://yourportfolio.com",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app using Node.js, Express, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://yourecommerce.com",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with user authentication and CMS features.",
    tech: ["React", "Firebase", "TailwindCSS"],
    url: "https://yourblog.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

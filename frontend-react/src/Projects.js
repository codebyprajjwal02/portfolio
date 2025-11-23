import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and modern CSS techniques.",
    tech: ["React", "CSS3", "Framer Motion"],
    liveUrl: "/",
    demoUrl: "/",
  },
  {
    title: "Netflix Clone",
    description: "A responsive clone of Netflix with user authentication and movie browsing features.",
    tech: ["React", "Firebase", "TMDB API"],
    liveUrl: "https://netflix-clone-demo.com",
    demoUrl: "https://github.com/yourusername/netflix-clone",
  },
  {
    title: "Trip Nest",
    description: "A travel planning application with itinerary management and booking features.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://trip-nest-demo.com",
    demoUrl: "https://github.com/yourusername/trip-nest",
  },
  {
    title: "AI Generator",
    description: "An AI-powered content generator with text and image creation capabilities.",
    tech: ["React", "OpenAI API", "Node.js"],
    liveUrl: "https://ai-generator-demo.com",
    demoUrl: "https://github.com/yourusername/ai-generator",
  },
  {
    title: "Deoghar Kitab",
    description: "A digital library platform for books related to Deoghar with search and reading features.",
    tech: ["React", "Firebase", "PDF.js"],
    liveUrl: "https://deoghar-kitab-demo.com",
    demoUrl: "https://github.com/yourusername/deoghar-kitab",
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
            <div className="project-buttons">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

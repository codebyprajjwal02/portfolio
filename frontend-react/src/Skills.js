import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const skillsData = [
  { name: "React", icon: <FaReact color="#61DBFB" />, percentage: 90, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" />, percentage: 85, color: "#68A063" },
  { name: "MongoDB", icon: <FaDatabase color="#4DB33D" />, percentage: 80, color: "#4DB33D" },
  { name: "HTML", icon: <FaHtml5 color="#E34C26" />, percentage: 95, color: "#E34C26" },
  { name: "CSS", icon: <FaCss3Alt color="#264DE4" />, percentage: 90, color: "#264DE4" },
  { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" />, percentage: 92, color: "#F0DB4F" },
];

const Skills = () => {
  const { theme } = useTheme();
  const [animatedSkills, setAnimatedSkills] = useState(skillsData.map(() => 0));
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillsData.forEach((skill, index) => {
            let start = 0;
            const animate = () => {
              start += 1;
              setAnimatedSkills((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
              if (start < skill.percentage) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section ${theme}`}
      ref={containerRef}
    >
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <svg className="progress-circle" width="120" height="120">
              <circle
                className="bg-circle"
                cx="60"
                cy="60"
                r="54"
                strokeWidth="12"
                fill="none"
              />
              <circle
                className="fg-circle"
                cx="60"
                cy="60"
                r="54"
                strokeWidth="12"
                fill="none"
                stroke={skill.color}
                strokeDasharray={2 * Math.PI * 54}
                strokeDashoffset={2 * Math.PI * 54 * (1 - animatedSkills[index] / 100)}
              />
            </svg>
            <div className="percentage">{animatedSkills[index]}%</div>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

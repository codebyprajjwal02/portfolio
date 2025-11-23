import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
    credentialId: "AWS-123456789"
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2022",
    description: "Demonstrates proficiency in designing, building, and managing solutions using Google Cloud technologies.",
    credentialId: "GCP-987654321"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    description: "Validates expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
    credentialId: "AZ-204"
  },
  {
    title: "Certified React Developer",
    issuer: "Meta",
    date: "2020",
    description: "Demonstrates advanced skills in building user interfaces with React and related libraries.",
    credentialId: "META-REACT-001"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="certification-header">
              <h3>{cert.title}</h3>
              <span className="issuer">{cert.issuer}</span>
            </div>
            <div className="certification-date">{cert.date}</div>
            <p className="certification-description">{cert.description}</p>
            <div className="certification-id">Credential ID: {cert.credentialId}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
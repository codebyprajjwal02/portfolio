import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Corp",
    feedback:
      "Prajjwal delivered an exceptional portfolio website with great attention to detail.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, Tech Solutions",
    feedback:
      "Highly skilled, professional, and fast in implementing web solutions.",
  },
  {
    name: "Alex Johnson",
    role: "CTO, Startup Inc",
    feedback:
      "Amazing developer, understands requirements quickly, and delivers with high quality.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Testimonials
      </motion.h2>

      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <p className="feedback">"{t.feedback}"</p>
            <h4 className="name">{t.name}</h4>
            <span className="role">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

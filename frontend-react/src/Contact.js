import React, { useRef } from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",   // replace with your service ID
        "",  // replace with your template ID
        form.current,
        ""    // replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section fade-in">
      <h2>Contact Me</h2>

      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="user_name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message..." required />

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:example@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;



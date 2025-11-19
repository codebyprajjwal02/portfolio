const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // for resume file

// Serve Resume
app.get("/resume", (req, res) => {
  const resumePath = path.join(__dirname, "public", "Prajjwal_Singh_Resume.pdf");
  res.download(resumePath, "Prajjwal_Singh_Resume.pdf", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to download resume.");
    }
  });
});

// Contact Form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Setup nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",        // <-- Replace with your Gmail
      pass: "your_email_password",         // <-- Use App Password if 2FA is on
    },
  });

  const mailOptions = {
    from: email,
    to: "your_email@gmail.com",           // <-- Where you want to receive messages
    subject: `Contact Form Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Failed to send message." });
    }
    res.json({ success: true, message: "Message sent successfully!" });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Simple Node.js backend for sending consultation form emails
// Requires: npm install express nodemailer cors

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001; // You can change this port if needed

app.use(cors());
app.use(express.json());

// Configure your email transport (use your real credentials for production)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eglobalixtechsolutions@gmail.com', // Your Gmail address
    pass: 'YOUR_APP_PASSWORD' // Use an App Password, not your Gmail password
  }
});

app.post('/api/book-consultation', async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    console.error('[Consultation] Missing field:', { name, email, phone, message });
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await transporter.sendMail({
      from: 'eglobalixtechsolutions@gmail.com',
      to: 'eglobalixtechsolutions@gmail.com',
      subject: 'New Consultation Booking',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Message:</b><br>${message.replace(/\n/g, '<br>')}`
    });
    console.log('[Consultation] Email sent successfully:', { name, email, phone });
    res.json({ success: true });
  } catch (err) {
    console.error('[Consultation] Failed to send email:', err);
    res.status(500).json({ error: 'Failed to send email.', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Consultation mailer backend running on http://localhost:${PORT}`);
});

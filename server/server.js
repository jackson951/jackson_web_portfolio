const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './server/.env' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create nodemailer transporter
console.log('Mail configuration:', {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  username: process.env.MAIL_USERNAME ? '***' : 'undefined'
});

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email server connection error:', error);
  } else {
    console.log('Email server is ready to take our messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email options for sending to you
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address (from the form)
      to: process.env.MAIL_USERNAME, // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0f172a, #1e1b4b); border-radius: 12px; border: 1px solid rgba(255, 0, 255, 0.3);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #fff; margin: 0; font-size: 1.5rem;">New Contact Message</h2>
            <p style="color: #94a3b8; margin: 5px 0 0 0;">From your cyberpunk portfolio</p>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #ff00ff;">
            <h3 style="color: #fff; margin: 0 0 15px 0; font-size: 1.2rem;">Message Details</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #94a3b8;">From:</strong>
              <p style="color: #fff; margin: 5px 0 0 0;">${name} <${email}></p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #94a3b8;">Subject:</strong>
              <p style="color: #fff; margin: 5px 0 0 0;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 0;">
              <strong style="color: #94a3b8;">Message:</strong>
              <p style="color: #fff; margin: 5px 0 0 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 0.9rem;">
            <p style="margin: 0;">This message was sent through your cyberpunk portfolio website</p>
            <p style="margin: 5px 0 0 0;">🌐 <a href="http://localhost:5174" style="color: #00f5ff; text-decoration: none;">Visit Portfolio</a></p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: 'Message Received - Jackson Khuto Portfolio',
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0f172a, #1e1b4b); border-radius: 12px; border: 1px solid rgba(255, 0, 255, 0.3);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #fff; margin: 0; font-size: 1.5rem;">Message Received! ✅</h2>
            <p style="color: #94a3b8; margin: 5px 0 0 0;">Thank you for contacting me</p>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #00f5ff;">
            <h3 style="color: #fff; margin: 0 0 15px 0; font-size: 1.2rem;">Your Message</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #94a3b8;">To:</strong>
              <p style="color: #fff; margin: 5px 0 0 0;">Jackson Khuto</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #94a3b8;">Subject:</strong>
              <p style="color: #fff; margin: 5px 0 0 0;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 0;">
              <strong style="color: #94a3b8;">Message:</strong>
              <p style="color: #fff; margin: 5px 0 0 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 0.9rem;">
            <p style="margin: 0;">I'll get back to you as soon as possible!</p>
            <p style="margin: 5px 0 0 0;">🚀 Stay cyberpunk!</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}`);
});
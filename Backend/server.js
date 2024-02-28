// Import the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hpjp002@gmail.com',
    pass: 'ipitatrtxaextoby'
  },
});

// Define the email content
const mailOptions = {
  from: 'hpjp002@gmail.com',
  to: 'hari.jp24@gmail.com',//'gokul.nair@entri.me',
  subject: 'Nodemailer Worked!!!',
  text: 'This is an automatic email sent from a Node.js server.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
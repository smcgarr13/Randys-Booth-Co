const nodemailer = require('nodemailer');
const yourEmail = '';
const yourPassword ='';

// Create a transport object with SMTP server settings
const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: yourEmail,
    pass: yourPassword,
  },
});

// Define the email message
const message = {
  from: yourEmail,
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent using nodemailer.',
};

// Send the email
transport.sendMail(message, (err, info) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});

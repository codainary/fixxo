
const nodemailer = require('nodemailer');
const { config } = require('./../../config/config');

async function sendEmail(info) {
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    secure: true, // true for 465, false for other ports
    port: config.smtpPort,
    auth: {
      user: config.smtpUsername,
      pass: config.smtpPassword
    }
  });
  await transporter.sendMail(info);
  return { status: 'email sent' }
}

module.exports = {
  sendEmail
}

const nodemailer = require("nodemailer");
require("dotenv").config({ path: "backend/config/config.env" });

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host:    process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: false,
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

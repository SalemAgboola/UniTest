// backend/utils/emailService.js
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, token) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Email from environment variables
      pass: process.env.EMAIL_PASS,
    },
  });

  const verificationLink = `https://unitest.onrender.com/api/auth/verify-email?token=${token}`; // Use the token to create the link

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: `Hello from UniTest,

We see you are trying to register with us.

Please memorize the code and continue the registration process in the Registration/Forgot Password page:
The link is invalid.
${verificationLink} 


Thank you!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

module.exports = { sendEmail };
